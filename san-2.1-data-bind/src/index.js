import san from 'san'

import {router} from 'san-router'
import San from './app.san'

if(process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!')
}


router.add({
	rule:'/',
	Component:San,
	target:'#app'
})


router.start()

