/*
 * File encapsulates action related to Survey List view
 *
 **/


var SurveyList = function() {

    return {showSurveyList : function(){showSurveyList();},
            fillWithData : function(i, item){fillWithData(i, item)}
    };

    function showSurveyList (){

        var columnIds = ["executeSortBySurveyName", "executeSortByDatePublished", "executeSortByPublisher", "executeSortByResults"];
        var columnTexts = ["LOC_SURVEY_NAME", "LOC_DATE_PUBLISHED", "LOC_PUBLISHER", "LOC_RESULTS"];
        var columnDbFields = ["title","uploadDate", "ndgUser.username", "resultCollection"];

        DynamicTable.showList(columnIds, columnTexts, columnDbFields, "listsurveys", SurveyList);

        $('#plusButton').mouseover( function(event) {SurveyListCombo.showMenu();});
        $('#leftColumnContent' ).append( '<h3>STATUS</h3><h4 class="markBuilding">Building</h4><h4 class="markAvailable">Available</h4>');
        $('#sectionTitle').text('Survey List');
        $('#userManagement').text('User Admin');
        $('#userManagement').click(function() {UserManagement.showUserManagement() });

        $('#uploadForm').submit(function () {uploadNewSurvey();} );
    }

    function fillWithData(i, item) {
        var date = new Date( item.uploadDate )
        $('#dynamicListTable').append( '<tr id="dynamicRow'+ i + '">'
                                    + '<td id="surveyNameCell">'+ item.title + '<br>ID: ' + item.surveyId + '</td>'
                                + '<td>' + date.toString("dd/MM/yy") + '</td>'
                                + '<td>' + item.ndgUser.username + '</td>'
                                + '<td id="resultCollectionQuantityString' + item.id + '"></td>'
                                + '<td class="menubar" id="menu' + i + '" >'
                                + '<span title="' + LOC.get('LOC_DOWNLOAD') + '"class="buttonDownload" id="buttonDownload" unselectable="on"/></span>'
                                + '<span title="' + LOC.get('LOC_UPLOAD') + '"class="buttonUpload" id="buttonUpload" unselectable="on"/></span>'
                                + '<span title="' + LOC.get('LOC_SEND') + '"class="buttonPhone" id="buttonPhone" unselectable="on"/></span>'
                                + '<span title="' + LOC.get('LOC_EDIT') + '" class="buttonEdit" id="buttonEdit" unselectable="on"/></span>'
                                + '<span title="' + LOC.get('LOC_DUPLICATE') + '"class="buttonDuplicate" id="buttonDuplicate" unselectable="on"/></span>'
                                + '<span title="' + LOC.get('LOC_DELETE') + '"class="buttonDelete" id="buttonDelete" unselectable="on"/></span>'
                                + '</td>'
                                + '</tr>' );

        if ( item.resultCollection > 0 ) {
            $('#resultCollectionQuantityString' + item.id ).append( '<a href="#" id="Item'+ item.id + '">' + item.resultCollection + '</a>' );
        } else {
            $('#resultCollectionQuantityString' + item.id ).append( '-' );
        }

        if( item.available ) {
            $('#dynamicRow'+ i + ' td:first' ).addClass( 'markAvailable' );
        } else {
            $('#dynamicRow'+ i + ' td:first' ).addClass( 'markBuilding' );
        }

        $( '#Item' + item.id ).click( item.id, function(i) {
            ResultList.showResultList(i);
        } );
        $('#menu' + i +' #buttonDownload').click( item.surveyId, function(i){onDownloadSurveyClicked(i);} );
        $('#menu' + i +' #buttonUpload').click( item.surveyId, function(i){onUploadSurveyClicked(i);} );
        $('#menu' + i +' #buttonDelete').click( item.surveyId, function(i){onDeleteSurveyClicked(i);} );
        $('#menu' + i +' #buttonDuplicate').click( item.surveyId, function(i){onDuplicateSurveyClicked(i);} );
        $('#menu' + i +' #buttonPhone').click( item.surveyId, function(i){onSendSurveyClicked(i);} );
        $('#menu' + i +' #buttonEdit').click( item.id, function(i){onEditSurveyClicked(i);} );
    }


    function onEditSurveyClicked(e) {
        Editor.createEditor(e);
    }

    function onDownloadSurveyClicked(e) {
        window.location.href = 'management/' + e.data;
    }

    function onUploadSurveyClicked(e) {
       uploadDialog.dialog("open");
       $("#uploadSurveyId").val(e.data);
    }

    function onDeleteSurveyClicked(e) {
        confirmDeleteDialog.dialog( {title: LOC.get('LOC_EXPORT_RESULTS')} );
        document.getElementById('buttonDeleteYes').textContent = LOC.get('LOC_YES');
        document.getElementById('buttonDeleteNo').textContent = LOC.get('LOC_NO');
        confirmDeleteDialog.dialog("open");
        $("#buttonDeleteYes").click( e.data, function(e){
            $.post( "/delete/" + e.data, function(data) {
            confirmDeleteDialog.dialog("close");
            DynamicTable.refresh();
        });
        $("#buttonDeleteYes").unbind("click");
        $("#buttonDeleteNo").unbind("click");
        });
       $("#buttonDeleteNo").click( function(){
           $("#buttonDeleteYes").unbind("click");
           $("#buttonDeleteNo").unbind("click");
           confirmDeleteDialog.dialog("close");
       });
    }

    function onDuplicateSurveyClicked(e) {
       $.post( "/duplicate/" + e.data, function(data) {
            DynamicTable.refresh();
        });
    }

    function onSendSurveyClicked(e) {
        SendSurvey.showUserList(e);
        sendSurveyDialog.dialog("open");
    }

    function uploadNewSurvey() {
        var resultFrame = $('#uploadSurveyResult').load(function ()
        {
           var response = resultFrame.contents().find('body').find('pre').html();
            if(response === "success") {
                alert("success");
               } else {
                alert("failure")
               }

           resultFrame.unbind('load');
           uploadDialog.dialog("close");
           $(':file', '#uploadForm' ).val('');
        });
        return true;
    }

}();