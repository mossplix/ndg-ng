var LOC = (function() {

    var constants = {
        LOC_CSV: 'Descargar en formato CSV',
        LOC_XLS: 'Descargar en formato XLS',
        LOC_CLOSE: 'Cerrar',
        LOC_EXPORT_IMAGES: 'La encuesta que desea exportar tiene las imágenes en sus resultados. ¿Quiere exportar las imágenes así?',
        LOC_EXPORT_FORMAT: 'Por favor, seleccione a continuación el formato de archivo para exportar los resultados',
        LOC_YES: 'Sí',
        LOC_NO: 'No',
        LOC_RESULTID: 'Id Resultado',
        LOC_RESULTTITLE: 'Titulo Resultado',
        LOC_DATESENT: 'Fecha de envío',
        LOC_USER: 'Usuario',
        LOC_LOCATION: 'Ubicación',
        LOC_BACK_TO_SURVEY_LIST: 'Volver SurveyList',
        LOC_EXPORT_RESULTS: 'Exportar los resultados',
        LOC_EXPORT_ALL_RESULTS: 'Exportar todos los resultados',
        LOC_DOWNLOAD: 'Descargar',
        LOC_UPLOAD: 'Subir',
        LOC_EDIT: 'Editar',
        LOC_DUPLICATE: 'Duplicado',
        LOC_DELETE: 'Borrar',
        LOC_SEND: 'enviar',
        LOC_PREVIEW: 'Preview',
        LOC_SURVEY_NAME: 'Nombre',
        LOC_DATE_PUBLISHED: 'Fecha',
        LOC_PUBLISHER: 'Editor',
        LOC_RESULTS: 'Results',
        LOC_SURVEYID: 'CuestionarioId',
        LOC_NEW_SURVEY: 'Nuevo Cuestionario',
        LOC_CHECK: 'Comprobar',
        LOC_NAME: 'Nombre',
        LOC_PHONE: 'Teléfono',
        LOC_EMAIL: 'E-mail',
        LOC_PERMISSION: 'Permiso',
        LOC_ALL: 'Todos',
        LOC_ALL_PAGES: 'Todas las páginas',
        LOC_NONE: 'Ninguno',
        LOC_SURVEY_DELETE_CONFIRM: '¿Está seguro de que quiere eliminar el cuestionario?',
        LOC_CHOOSE_SURVEY_UPLOAD: 'Escoga un cuestionario para cargar',
        LOC_SURVEY_UPLOAD: 'Carga de cuestionario',
        LOC_SEND_FILE: 'Enviar archivo',
        LOC_SEND_SURVEY: 'Enviar cuestionario',
        LOC_DONE: 'Terminado',
        LOC_SEARCH: 'Buscar...',
        LOC_USERNAME: 'Nombre de usuario',
        LOC_CONFIRM_DELETE: 'Al eliminar el usuario se eliminarán todos los cuestionarios y resultados relacionados! Haga clic para continuar ',
        LOC_NEW_USER: 'Nuevo usuario',
        LOC_GROUP: 'Grupo',
        LOC_USERS: 'Usuario(s)',
        LOC_NEW_GROUP: 'Nuevo grupo',
        LOC_FIRST_NAME: 'Nombre',
        LOC_LAST_NAME: 'Apellido',
        LOC_PASSWORD: 'Contraseña',
        LOC_RETYPE_PASSWORD: 'Repitir contraseña',
        LOC_PHONE_NUMBER_LONG: 'Número de teléfono',
        LOC_ADMIN: 'Administrador',
        LOC_FIELD_WORKER: 'Investigador de campo',
        LOC_OPERATOR: 'Operador',
        string: 'Descriptivo',
        'int': 'Entero',
        decimal: 'Decimal',
        date: 'Fecha',
        'binary#image': 'Imágen',
        select: 'Elección múltiple',
        select1: 'Elección exclusiva',
        time: 'Hora',
        LOC_SAVESURVEY:'Salvar cuestionario',
        LOC_CANCEL: 'Cancelar',
        LOC_RESULT_LIST: 'Lista de resultados',
        LOC_MAP_VIEW: 'Ver en mapa',
        LOC_GRAPH_VIEW: 'Ver en gráficos',
        LOC_PIE_CHART: 'Gráfico de torta',
        LOC_BAR_CHART: 'Gráfico de barras',
        LOC_EXPORT_TO: 'Exportar A',
        LOC_SEND_SMS: 'Enviar SMS',
        LOC_TO: 'A',
        LOC_PHONE_NUMBER: 'Número de teléfono',
        LOC_EXTERNAL_SERVICE: 'Servicio external',
        LOC_CANNOT_EDIT_SURVEY: 'No se puede editar el cuestionario. El cuestionario ya está disponible. Por favor, duplicar y editar..',
        LOC_SURVEY_LIST: 'Lista de cuestionarios',
        LOC_USER_ADMIN: 'Administración de usuarios',
        LOC_NEW_CATEGORY: 'Nueva categoría',
        LOC_NEW_QUESTION: 'Nueva pregunta',
        LOC_NEW_OPTION: 'Nueva opción',
        LOC_SAVE_SURVEY : '¿Quiere salvar el cuestionario?',
        LOC_LENGTH : 'Longitud',
        LOC_MIN_RANGE: 'Rango mínimo ',
        LOC_MAX_RANGE: 'Rango máximo ',
        LOC_DRAG_NEW_CATEGORY: 'Arrastrar para añadir nueva categoría',
        LOC_DRAG_NEW_QUESTION : 'Arrastrar para añadir nueva pregunta',
        LOC_DROP_CATEGORY: 'Colocar aqui para añadir nueva categoría',
        LOC_DROP_QUESTION: 'Colocar aqui para añadir nueva pregunta',
        LOC_WARN_DELETE_OPTION :'Este tipo de pregunta debe tener por lo menos una opción',
        LOC_RESULT_DELETE_CONFIRM: '¿Está seguro de que quiere eliminar el resultado?',
        LOC_MSG_PASSWORD_NOT_MATCH: 'Contraseña no válida',
        LOC_MSG_SHORT_NUMBER: 'Número de teléfono demasiado corto',
        LOC_EXPAND_ITEM_LIST:'Haga clic aquí para más items',
        LOC_LOADING: 'Cargando...',
        LOC_BUILDING: 'Construyendo',
        LOC_AVAILABLE: 'Disponible',
        LOC_CLOSED: 'Cerrado',
        LOC_STATUS: 'ESTATUS',
        LOC_CSV_FILE_UPLOAD: 'Archivo CSV cargando',
        LOC_CHOOSE_CSV_FILE_UPLOAD: 'Escoga un archivo CSV para cargar',
        LOC_LOAD: 'Cargar',
        LOC_CLICK_TO_DISABLE_FILTER: 'Haga clic aquí para eliminar filtro',
        LOC_CLICK_TO_DISABLE_SELECTED_GROUP: 'Drag & Drop usuarios o grupos'
    };

    return {
        get: function(name) {
            return constants[name];
        }
    };
})();

