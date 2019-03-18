module.exports.sendbox = {
    modulename:'sendbox',
    //admin
    name:'📨 ارسال پیام', 
    back:'🔙 بازگشت به ارسال پیام',
    sendboxSymbol:'ـ ' + '🗒 ',

    btns: {
        newmess:'پیام جدید',
        settings : '⚙️' + ' - ' + 'تنظیمات',
    },

    mess: {
        gettitle:'لطفا عنوان پیام را ارسال کنید.',
        gettext:'متن جدید را ارسال کنید.',
        wrongtitle : 'این عنوان قبلا ثبت شده است، لطفا عنوان دیگری انتخواب کنید.',
        contactWadminMess:'لطفا پیام متنی خود را برای مدیر مجموعه ارسال کنید.',
        getVoteItem:'لطفا عنوان گزینه جدید را برای نظر سنجی ارسال کنید.',
    },

    query: {
        sendbox:'sendbox',
        admin       : 'a',
        settings    : 'stings',
        send :'send',
        delete :'delete',
        title :'editTitle',
        text :'edit',

        addVoteitem     : 'avi',
        removeVoteitem  : 'rvi',
        votting         : 'vting',
        voteresult      : 'vtr',
    },

    datas: {

        retantionCheckerStatus: {
            'name'  : 'پیام اتوماتیک',
            'mess'  : 'این قابلیت به کاربرانی که مدت طولانی است به ربات سر نزده اند پیام اتوماتیک ارسال میکند.',
            'items' : [
                {'name': 'true', 'lable':'فعال'},
                {'name': 'false', 'lable':'غیر فعال'},
            ]
        },

        retantionCheckerDays: {
            'name'  : 'روز',
            'mess'  : 'بعد از چند روز عدم فعالیت کاربران به آنها پیام اتوماتیک ارسال شود؟',
        },

        retantionCheckerTime: {
            'name'  : 'ساعت',
            'mess'  : 'ساعتی که مایل هستید پیام اتوماتیک به کاربران ارسال شود را مشخص کنید. \nsample: 15:30',
        },
    }
}