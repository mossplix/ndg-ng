package controllers;

import controllers.exceptions.SurveySavingException;
import controllers.logic.SurveyPersister;
import flexjson.JSONSerializer;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.Date;
import java.util.List;
import models.QuestionType;
import models.Survey;
import models.TransactionLog;
import models.constants.TransactionlogConsts;
import models.utils.NdgQuery;
import models.utils.SurveyDuplicator;
import play.mvc.Controller;

public class SurveyManager extends Controller {

    public static void questionType() {
        List<QuestionType> types = QuestionType.find("bySupported", 1).fetch();

        JSONSerializer typeSerializer = new JSONSerializer();
        typeSerializer.include("typeName", "id").exclude("*").rootName("types");
        renderJSON(typeSerializer.serialize(types));
    }

    public static void saveSurvey(String surveyData) {
        renderText(SurveyJsonTransformer.saveSurvey(surveyData));
    }

    public static void getSurvey(long surveyId) {//TODO exclude more not needed params
        renderJSON(SurveyJsonTransformer.getJsonSurvey(surveyId));
    }

    public static void upload(File filename, String uploadSurveyId) throws IOException, SurveySavingException {
        InputStreamReader is = null;
        String result = "failure";
        try {
            is = new InputStreamReader(new FileInputStream(filename), "UTF-8");
            SurveyPersister persister = new SurveyPersister(is);
            persister.saveSurvey(uploadSurveyId);
            result = "success";
        } finally {
            if (is != null) {
                is.close();
            }
        }
        renderText(result);
    }

    public static void delete(String formID) {
        Survey deleted = Survey.find("bySurveyId", formID).first();
        deleted.delete();
    }

    public static void duplicate(String formID)
    {
        Survey origin = Survey.find("bySurveyId", formID).first();

        SecureRandom random = new SecureRandom();
        String newId = new BigInteger(40, random).toString(32);

        Survey copy = SurveyDuplicator.plainCopy(origin, newId);

        copy.save();
    }

    public static void sendSurveys(String formID, String users[])
    {
        for (int i = 0; i < users.length; i++) {
            TransactionLog transaction = new TransactionLog();
            transaction.transactionDate =new Date();
            transaction.transactionType = TransactionlogConsts.TransactionType.TYPE_SEND_SURVEY;
            transaction.transactionStatus = TransactionlogConsts.TransactionStatus.STATUS_AVAILABLE;
            transaction.transmissionMode = TransactionlogConsts.TransactionMode.MODE_HTTP;

            transaction.address = request.remoteAddress;
            transaction.ndgUser  = NdgQuery.getUsersbyId(Long.parseLong(users[i]));
            transaction.survey = NdgQuery.getSurveyById(formID);

            transaction.save();
        }
    }
}