

 

//--------------------------------------------
//Для регистрации
var request={
    email: 'str',
    password: 'str'
}


// *** *** *** *** *** ***
// Для авторизации + регистрации (code - это userId ?)
// нужно ли отдельно userData выделять...
//% Изначально планировал что code - это результат запроса(код ошибки). Т.е например так:
// 200 - регистрация прошла успешна
// 201 - такой email уже существует 
// Но думаю, что это неактуально, так как вряд ли у нас будет много типов ошибок
// Поэтому в случае ошибки можно просто возвращать пустой объект
// *** *** *** *** *** ***

var response={
	userid:int,
        name:"str",
        surName:"str",
        photo:"str",
        description:"",
        notifications:[],
        myStartupId:int

}
 //Для авторизации
var request={
    email: 'str',
    password: 'str',
}
var response={
        userid:int
        name:"str",
        surName:"str",
        photo:"str",
        description:"",
        notifications:[],
        myStartupId:int

}

// *** *** *** *** *** ***
// Поиск стартапов - добавить еще поле (count) кол-во выдаваемых стартапов
//  по стартапам скидывал запрос в вк: startups
// *** *** *** *** *** ***

//Для страницы Поиск стартапов /* */
var data_sent = {
    find_str:'str',
    start_from:int,//Если на одной стр. 9 стартапов, то для 1 страницы start_from=0, для 2 страницы start_from=9 и тд
    count:int,
    additional_params:{
        data:'dd.mm.yyyy',
        ...
    }
};

var response = [
	{
		title: 'Площадка для ddddстартапов', 
		short_description: 'Создать сайт, где люди смогут обхединяться в стартапы и создавать их.', 
		id: 3, 
		more_info: {
			author_img: 'people.svg', 
			author_name: 'Вася Вася',
			need_people: [
				{
					position: 'программист JS',
					isFound: true
				}
			]
		};
	},
	{
		...
	}
];

// *** *** *** *** *** ***
// Для просмотра конкретного стартапа
// isMyStartup - только для того чтобы вообще кнопок не отображать ;)
// % Ну а как ты тогда узнаешь принадлежит ли этот стартап данному юзеру и может ли он просматривать его сообщения, редактировать данные и тд?
//% Или эта страница выглядит одинаковой для всех участников и на этом этапе тебе не нужно знать кто владелец стартапа?
// description лучше заменить на : full_description
//% Предлагаю лучше сделать description и short_description, а body вообще не использовать(в запросе о массиве стартапов после title)
// messages:[] - не нужен, сообщения нужны при просмотре своего стартапа в отд вклюдке
// 
//  + нужно подумать где будем подгружать изображения участников стартапа (или на общей странице поиска вместе с more_info или в этом запросе прикреплять, я думаю лучше в общей)
//% Ок, давай на общей странице в more_info
// *** *** *** *** *** ***

//Для просмотра конкретного стартапа
var request = {
        startupId:int
    }
};



var response={
    authUser:true||false,
    startupData:{
        isMyStartup:true||false,//Значит отображаем еще и кнопку "редактировть"
        description:"str",

    }
}

// *** *** *** *** *** ***
// Если authUser == false
// тут думаю лучше разбить на 2 запроса(чтобы не смешивать):
//  1й - запрос регистрации с возвратом данных юзера, (и тогда можно будет открыть ему страницу с отправкой сообщения автору)
//  2й  - запрос на добавление в стартвп уже 
//  
//  (code - это userId ?)
// *** *** *** *** *** ***

//% Тогда так:
// uri:/apply
var request={
        userid:int,
        startupId:int,
        position:"str"
}

var response={
    contactData:{
        email:"str",
        vk:"str",
        ...
    }
}

// *** *** *** *** *** ***
// Страница мой стартап
// еще заявки нужно(если это автор): startup_requests:[]
// *** *** *** *** *** ***

//Страница мой стартап
//Начальный запрос к странице
//uri:/mystartup - get запрос

var response={
    role:"str",//master||member||no
    startup:{
        messages:[],
        members:[],
        startup_requests:[]//if role == master

    }

}


// *** *** *** *** *** ***
// Создать стратап
// (эти же изменения и в редактирование стартапа)
// shortDescr заменита на: short_description
// description заменита на: full_description
// % По поводу description уже писал
// *** *** *** *** *** ***


//Создать стратап
//uri:/createstartup
var request={
    theme: 'str',
    shortDescr:"str",//Краткое описание, видно при наведении мыши
    description: 'str',
    peopleNeeded:"str", //Перечисление вакансий !через запятую!
    contacts:"str"
}

var response={
  code:int
}

//Редактировать стратап
//uri:/changestartup
var request={
    myStartupId:int,
    theme: 'str',
    shortDescr:"str",//Краткое описание, видно при наведении мыши
    description: 'str',
    peopleNeeded:"str", //Перечисление вакансий !через запятую!
    contacts:"str"
}

var response={
    code:int
}

