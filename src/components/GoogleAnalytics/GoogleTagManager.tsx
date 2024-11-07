import React from "react";
import { Helmet } from "react-helmet";

const GoogleTagManager: React.FC = () => {
  return (
    <>
      {/* Google Tag Manager script in <head> */}
      <Helmet>
        <script>
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[]; 
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:''; 
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; 
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NQJ5G6BR');
          `}
        </script>
      </Helmet>

      {/* Google Tag Manager noscript in <body> */}
      <Helmet>
        <noscript>
          {`
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQJ5G6BR"
              height="0" width="0" style="display:none;visibility:hidden">
            </iframe>
          `}
        </noscript>
      </Helmet>
    </>
  );
};

export default GoogleTagManager;
