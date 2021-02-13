import React from 'react';
import { Helmet } from 'react-helmet';
import Willy from '../assets/images/willy.png';

const ReactHelmet = () => {
	return (
        <div>
            <Helmet>
			    <meta name="twitter:url" content={"https://travelmbti.com/copy_result?char=" + "Willy" + "&tag=" + 2} />
			    <meta name="twitter:title" content="title" />
			    <meta name="twitter:description" content="description" />
			    <meta name="twitter:image" content={Willy} />
			    <meta name="twitter:card" content="summary" />
		    </Helmet>
            
        </div>
		
	);
};
export default ReactHelmet;