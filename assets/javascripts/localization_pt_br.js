var LOC = (function() {

    var constants = {
        LOC_CSV: 'Baixar em formato CSV',
        LOC_XLS: 'Baixar em formato CSV',
        LOC_CLOSE: 'Fechar',
        LOC_EXPORT_IMAGES: 'Os resultados da pesquisa contém imagens. Também deseja exportar as imagens?',
        LOC_EXPORT_FORMAT: 'Selecione o formato que deseja exportar.',
        LOC_YES: 'Sim',
        LOC_NO: 'Não',
        LOC_RESULTID: 'Id Resultado',
        LOC_RESULTTITLE: 'Título',
        LOC_DATESENT: 'Data de Envio',
        LOC_USER: 'Usuário',
        LOC_LOCATION: 'Coordenadas',
        LOC_BACK_TO_SURVEY_LIST: 'Voltar para Lista de Pesquisas',
        LOC_EXPORT_RESULTS: 'Exportar Resultados',
        LOC_EXPORT_ALL_RESULTS: 'Exportar Todos Resultados',
        LOC_DOWNLOAD: 'Baixar',
        LOC_UPLOAD: 'Carregar',
        LOC_EDIT: 'Editar',
        LOC_DUPLICATE: 'Duplicar',
        LOC_DELETE: 'Excluir',
        LOC_SEND: 'Enviar',
        LOC_PREVIEW: 'Preview',
        LOC_SURVEY_NAME: 'Nome da Pesquisa',
        LOC_DATE_PUBLISHED: 'Data',
        LOC_PUBLISHER: 'Perm',
        LOC_RESULTS: 'Results',
        LOC_SURVEYID: 'Id Pesquisa',
        LOC_NEW_SURVEY: 'Nova Pesquisa',
        LOC_CHECK: 'Verificar',
        LOC_NAME: 'Nome',
        LOC_PHONE: 'Telefone',
        LOC_EMAIL: 'E-mail',
        LOC_PERMISSION: 'Permissão',
        LOC_ALL: 'Todos',
        LOC_ALL_PAGES: 'Todas as Páginas',
        LOC_NONE: 'Nenhum',
        LOC_SURVEY_DELETE_CONFIRM: 'Tem certeza que quer excluir pesquisa?',
        LOC_CHOOSE_SURVEY_UPLOAD: 'Escolha uma pesquisa para enviar pro servidor',
        LOC_SURVEY_UPLOAD: 'Enviar Pesquisa pro Servidor',
        LOC_SEND_FILE: 'Enviar Arquivo',
        LOC_SEND_SURVEY: 'Enviar Pesquisa',
        LOC_DONE: 'Pronto',
        LOC_SEARCH: 'Busca...',
        LOC_USERNAME: 'Usuário',
        LOC_CONFIRM_DELETE: 'Ao excluir o usuário você irá excluir também todas as pesquisas e resultados relacionados! Clique para continuar',
        LOC_NEW_USER: 'Novo Usuário',
        LOC_GROUP: 'Grupo',
        LOC_USERS: 'Usuário(s)',
        LOC_NEW_GROUP: 'Novo Grupo',
        LOC_FIRST_NAME: 'Nome',
        LOC_LAST_NAME: 'Sobrenome',
        LOC_PASSWORD: 'Senha',
        LOC_RETYPE_PASSWORD: 'Repetir Senha',
        LOC_PHONE_NUMBER_LONG: 'Telefone',
        LOC_ADMIN: 'Admin',
        LOC_FIELD_WORKER: 'Agente de Campo',
        LOC_OPERATOR: 'Operador',
        string: 'Descritiva',
        'int': 'Inteiro',
        decimal: 'Decimal',
        date: 'Data',
        'binary#image': 'Imagem',
        select: 'Multipla Escolha',
        select1: 'Escolha Única',
        time: 'Hora',
        LOC_SAVESURVEY:'Salvar pesquisa',
        LOC_CANCEL: 'Cancelar',
        LOC_RESULT_LIST: 'Lista de Resultados',
        LOC_MAP_VIEW: 'Mapa',
        LOC_GRAPH_VIEW: 'Gráficos',
        LOC_PIE_CHART: 'Gráfico de Setores',
        LOC_BAR_CHART: 'Gráfico de Barras',
        LOC_EXPORT_TO: 'Exportar Para',
        LOC_SEND_SMS: 'Enviar SMS',
        LOC_TO: 'Para',
        LOC_PHONE_NUMBER: 'Número de Telefone',
        LOC_EXTERNAL_SERVICE: 'Serviço Externo',
        LOC_CANNOT_EDIT_SURVEY: 'Não é possível editar pesquisa pois a mesma está disponível. Duplique a pesquisa e em seguida modifique-a.',
        LOC_SURVEY_LIST: 'Lista de Pesquisas',
        LOC_USER_ADMIN: 'Administrar Usuários',
        LOC_NEW_CATEGORY: 'Nova Categoria',
        LOC_NEW_QUESTION: 'Nova Pergunta',
        LOC_NEW_OPTION: 'Nova opção',
        LOC_SAVE_SURVEY : 'Deseja salvar a pesquisa?',
        LOC_LENGTH : 'TAMANHO',
        LOC_MIN_RANGE: 'MÍNIMO',
        LOC_MAX_RANGE: 'MÁXIMO',
        LOC_REQUIRED: 'OBRIGATÓRIO',
        LOC_DRAG_NEW_CATEGORY: 'Arraste para adicionar nova categoria',
        LOC_DRAG_NEW_QUESTION : 'Arraste para adicionar nova pergunta',
        LOC_DROP_CATEGORY: 'SOLTE AQUI PARA ADICIONAR UMA NOVA CATEGORIA',
        LOC_DROP_QUESTION: 'SOLTE AQUI PARA ADICIONAR UMA NOVA PERGUNTA',
        LOC_WARN_DELETE_OPTION :'Este tipo de pergunta deve possuir ao menos uma opção',
        LOC_RESULT_DELETE_CONFIRM: 'Deseja deletar resultado?',
        LOC_MSG_PASSWORD_NOT_MATCH: 'Senha não confere',
        LOC_MSG_SHORT_NUMBER: 'Número de telefone muito pequeno',
        LOC_EXPAND_ITEM_LIST:'Clique aqui para carregar mais itens',
        LOC_LOADING: 'Carregando...',
        LOC_BUILDING: 'Construindo',
        LOC_AVAILABLE: 'Disponível',
        LOC_CLOSED: 'Trancado',
        LOC_STATUS: 'STATUS',
        LOC_CSV_FILE_UPLOAD: 'Carregando arquivo CSV',
        LOC_CHOOSE_CSV_FILE_UPLOAD: 'Escolha o arquivo CSV para carregar',
        LOC_LOAD: 'Carregar',
        LOC_CLICK_TO_DISABLE_FILTER: 'Cloque aqui para limpar o filtro',
        LOC_CLICK_TO_DISABLE_SELECTED_GROUP: 'Arraste e Solte Usuários ou Grupos'
    };

    return {
        get: function(name) {
            return constants[name];
        }
    };
})();

