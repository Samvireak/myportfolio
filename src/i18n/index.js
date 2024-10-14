import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        home: 'Home',
        about: 'About',
        api: 'API',
        register: 'Register',
        contact: 'Contact',
        login:  'Login',
        welcome: 'welcome to my website',
        welcome1: 'Hello, I am ',
        welcome2: 'Vireak ',
        welcome3: 'currently based in Phnom Penh city.',
        welcome4: 'I work for the Ministry of Inspection, The Ministry has sent me to attend software development course. This course made me aware of important new experiences in website programming.',
        getstart: 'Get Started',
        Email: 'Email address',
        Password: 'Password',
        Remember: 'Remember me',
        Forgot: 'Forgot password?',
        Login: 'Sign in'

    },
    khm: {
        home: 'ទំព័រដើម',
        about: 'អំពីខ្ញុំ',
        api: 'អេភីអាយ',
        register: 'ចុះឈ្មោះ',
        contact: 'ទំនាក់ទំនង',
        login: 'ចុះឈ្មោះ',
        welcome: 'សូមស្វាគមន៍មកកាន់គេហទំព័ររបស់ខ្ញុំ',
        welcome1: 'សួរស្តី ខ្ញុំឈ្មោះ ',
        welcome2: 'វីរៈ ',
        welcome3: 'បច្ចុប្បន្នមានមូលដ្ឋាននៅទីក្រុងភ្នំពេញ។ ',
        welcome4: 'ខ្ញុំធ្វើការនៅក្រសួងអធិការកិច្ច ក្រសួងបានបញ្ជូនខ្ញុំឱ្យចូលរៀនវគ្គអភិវឌ្ឍន៍កម្មវិធី។ វគ្គសិក្សានេះបានធ្វើឱ្យខ្ញុំដឹងពីបទពិសោធន៍ថ្មីៗសំខាន់ៗក្នុងការសរសេរកម្មវិធីគេហទំព័រ។',
        getstart: 'ចាប់ផ្តើម',
        Email: 'អាសយដ្ឋានអ៊ីមែល',
        Password: 'លេខសម្ងាត់',
        Remember: 'ចងចាំខ្ញុំ',
        Forgot: 'ភ្លេចពាក្យសម្ងាត់?',
        Login: 'ចូល',

    }
}

const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n