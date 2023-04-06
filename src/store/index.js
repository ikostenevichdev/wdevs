import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    menu: [
      {
        path: "/about",
        name: "About",
        children: [
          {
            path: "/our-story",
            name: "Our success story",
          },
          {
            path: "/cant-find",
            name: "Cant’ find a vendor for your project",
          },
          {
            path: "/consider-outsourcing",
            name: "Can’t consider outsourcing",
          },
        ],
      },
      {
        path: "/portfolio",
        name: "Portfolio",
      },
      {
        path: "/blog",
        name: "Blog",
      },
      {
        path: "/contacts",
        name: "Contacts",
      },
    ],
    our_story_content: [
      {
        years: "2007",
        text: `
        <p>The company was founded in 2007 by <a href="https://www.linkedin.com/in/andrey-labunskiy-b6b00373/" target="_blank">Andrey Labunskiy</a>, who started with another 2 guys that were also as dedicated as he was to supporting and developing their first client: <i>http://quotationjunction.com</i>. The MVP exceeded all expectations and the client continued to run their system development through us. While the client’s success grew, so did our dedicated team - while simultaneously sourcing new clients and promoting our services using a referral scheme.
        </p>
        `,
      },
      {
        years: "2008",
        text: `
        <p>
        By 2008 we had 15 developers and many new clients - all with their own unique challenges and learning curves. At that time we established a collaborative partnership with <i>trafficjunction.co.uk</i> and decided to move forward together.
        </p>
        <p>
        Since then, our client numbers; as well as their significance, have grown remarkably and we are therefore thankful for that specific partnership which helped us become who we are today. Please see a few examples below of some of the collaborations which we’ve been a part of since then:
        </p>
        <ul>
        <li><i><a href="https://pdaverticals.com/" target="_blank">Pdaverticals.com</a></i> started working with us to develop their complicated <a href="/our-story/project/pharmaceutical-system">pharmaceutical system</a>.
        </li>
        <li>
        <i><a href="https://www.parliamenttoday.com/" target="_blank">Parliamenttoday.com</a></i> also hired us to support their site.
        </li>
        </ul>
        <p>
        Later in 2008, we invested into researching iOS and initiated a few pilot projects.
        </p>
        `,
      },
      {
        years: "2009",
        text: `
        <p>
        In early 2009, we were at that stage when Android first saw the light of day and the time to invest in learning about this new technology had dawned - so we jumped in headfirst.
        </p>
        <p>
        We developed a number of Android apps - the most memorable being <a href="/our-story/project/ppc-editor">PPCEditor</a>, tthe app first used to manage Google AdWords campaigns from mobile phones. Google did not have any apps for their campaigns at that time.
        </p>
        <p>
        That app is still particularly memorable because before Google had started developing their own app, they had researched other popular apps on the market and had started a conversation with us about a possible partnership - at that time, we dared to dream that we would be partners with THE Giant, but unfortunately Google had decided to manage their own development instead of purchasing our app.
        </p>
        <p>
        Our fresh approach and experience in iOS/Android allowed us to cooperate closely with <i>Trafficjunction.co.uk</i> and we started working on the revolutionary project: <i><a href="https://touchpanelcontrol.com" target="_blank">https://touchpanelcontrol.com</a></i> which allowed us to use a mobile phone to control home automation systems by AMX.
        </p>
        <p>
        The tourist agency <i><a href="https://laspi.com/" target="_blank">Laspi.com</a></i>, approached us to start working with them on <a id="laspi" href="/our-story/project/laspi">their intranet</a> and we also gaineda significant (for us at the time) client who recruited us to work on their <a href="/our-story/project/traffic-generation-system">Traffic Generation System</a>.
        </p>
        `,
      },
      {
        years: "2010-2013",
        text: `
        <p>
        Like attracts like.
        </p>
        <p>
        We had three new clients all working on similar ideas for  <a href="/our-story/project/traffic-generation-system">traffic generation</a>. We established a dynamic team to work on similar systems development and support, and one of those clients stepped forward and implemented a fake traffic generation module into his system.
        </p>
        <p>
        In cooperation with TrafficJunction, we worked on a series of cross-platform <a id="games" href="/our-story/project/games">mobile games</a> during this period, as well as with a few other clients who came onboard with gaming development too, and subsequently we developed a framework for educational games with its own series of gaming based on that particular <i><a href="https://flinklearning.com/apps?cat_id=1" target="_blank">framework</a></i>. For another client, we even worked on a series of JS games, and many other memorable mobile apps were also developed during those first few years. Another really great client: <i>asapventures.co.uk</i> developed a framework for <a id="price-comparison-sites" href="/our-story/project/price-comparison-sites">price comparison systems</a> and we managed over 20 apps for this system, as well as apps for various taxi/cab booking systems.
        </p>
        `,
      },
      {
        years: "2014-2017",
        text: `
        <p>
        Finally, our <strong>Magento journey</strong> began in 2014.
        </p>
        <p>
        <i><a href="https://aheadworks.com/" target="_blank">Aheadworks.com</a></i> is one of the original forerunners when it comes to the Magento extension development market, and their main specialized focus has always been on Magento extensions development. In their first 15 years of existence, <i>Aheadworks</i> developed hundreds of Magento extensions and the majority of their focus was always placed on new extensions development, since many of their clients constantly requested new extension customizations.
        </p>
        <p>
        Hiring a Magento extensions vendor is always the most advantageous way of managing <i>Aheadworks</i>  customizations and through the years, many of their clients have realized this and requested customizations via them, and then - after getting excited about the quality of our work, turned into our permanent clients.
        </p>
        <p>
        In 2014 we agreed to enter into a partnership with <i>Aheadworks</i> to assist with their extensions customizations. This required some time and investment to thoroughly investigate their extensions, but in approximately a year we had become adept in this field and set about building a dynamically strong team of Magento experts.
        </p>
        <p>
        In 2014 Andrey met <a href=" https://www.linkedin.com/in/romanglushchuk/" target="_blank">Roman Glushchuk</a> who became a significant part of the company very quickly and who helped establish Wdev’s marketing strategy on an entirely new level.
        </p>
        <p>
        In 2017 we became an exclusive <i><a href="https://aheadworks.com/" target="_blank">Aheadworks</a></i> partner in custom development and we will always be thankful to them for helping to place us on a level which attracted many new clients and helped us to establish such a strong Magento team.
        </p>
        <p>
        Moreover, <i>AheadWorks</i> helped us to reach the next level of Magento development and with their assistance, we’ve learned how to deal with custom development requests related to 3rd party code and we’ve developed scripting for some of the most common; as well as complex, problems Magento sites usually experience. This collaboration was truly mutually advantageous and created a platform where all involved parties benefitted:
        </p>
        <ul>
        <li>
        More clients and profit to both parties
        </li>
        <li>
        Clients receive solutions at an affordable price (Pareto’s Law). Since we have so many solutions to tap into from our vast field of expertise, we don’t charge each client the full development price for an already existing solution - we just implement the already existent formula from our knowledgeable think-tank, at an affordable price.
        </li>
        </ul>
        <p>
        Besides working on Magento, we also managed to execute a few significant projects for some new clients:
        </p>
        <ul>
        <li>
         <a id="california-crane-school-certification-system" href="/our-story/project/california-crane-school-certification-system">California Crane School Certification System</a>
        </li>
        <li>
        <a id="gameit" href="/our-story/project/gameit">Gameit.us</a> - a unique gaming concept which created a platform where ‘prizes’ could be offered to users, which in turn created more advertising revenue than the actual product’s worth. This was developed as an iOS app.
        </li>
        <li>
        <a id="seo-reporter" href="/our-story/project/seo-reporter">SEO-Reporter</a> - analytics software for the banking sector
        </li>
        <li>
        <a id="shout-outs" href="/our-story/project/shout-outs">ShoutOuts</a> - a tool created to emulate and compete with Spotify, YoutubeMusic and iTunes, as well as many other exciting projects
        </li>
        </ul>
        `,
      },
      {
        years: "2018-2021",
        text: `
        <p>
        Thanks to G2i.com we gained vast exposure while simultaneously helping them to better establish themselves. They brought a few significant clients to the table and we developed a series of exciting projects in collaboration with them:
        </p>
        <ul>
        <li>
         <a id="resolute-intranet-and-sundashboard" href="/our-story/project/resolute-intranet-and-sundashboard">Resolute Intranet and ITA dashboard</a> -  a medical intranet
        </li>
        <li>
        <a id="sundashboard" href="/our-story/project/resolute-intranet-and-sundashboard/#sundashboard">Sun Dashboard</a> - a neural network for medical data
        </li>
        <li>
        <a id="truebill" href="/our-story/project/truebill">Truebill.com</a> - a tool to analyze various subscriptions
        </li>
        <li>
        As well as many other systems, including a series of React Native apps
        </li>
        </ul>
        <p>
        During these years we also managed to enlist a few well knowned clients:
        </p>
        <ul>
        <li>
         <a id="siemens-spc-anywhere" href="/our-story/project/siemens-spc-anywhere">Siemens</a> - the experience we accumulated while collaborating with touchpanelcontrol.com helped us to develop an app to control Siemens home automation systems.
        </li>
        <li>
        <a id="citrix-startup" href="/our-story/project/citrix-startup">Citrix</a> - we worked on their site to improve their online conferences.
        </li>
        </ul>
        <p>
        While many good things happened to us during this period of time, 2018 also had its fair share of problems. Our biggest Magento partner; <i>Aheadworks</i>, was sold to a bigger IT company with a colossal body of development staff and they began to manage all their own custom development - leaving us with the significant challenge of rearranging our Magento team. Thankfully though, the losses brought victories and we established a successful collaboration with other key players on the Magento market.
        </p>
        <p>
        Unpredictable Magento development became one of our key focuses and to provide even better Magento services, we created a new company registered in Cyprus - Webdevs LTD.
        </p>
        <p>
        In 2018 the original company was split and is divided as follows:
        </p>
        <ul>
        <li>
        Wdevs INC US: is managed by <a href=" https://www.linkedin.com/in/romanglushchuk/" target="_blank">Roman Glushchuk</a> and is focused on web, mobile, and desktop apps
        </li>
        <li>
        Webdevs LTD: is managed by <a href=" https://www.linkedin.com/in/andrey-labunskiy-b6b00373/" target="_blank">Andrey Labunskiy</a> and is mainly focused on Magento development
        </li>
        </ul>
        <p>
        The companies are in partnership, but they are individually focused on different development areas.
        </p>
        <p>
        We are thankful to all of our clients who were; and are, a part of our ongoing adventure blessed with growth, but our special thanks will always go to QuotationJunction who helped us to get to where we are today! Our separation was unfortunate, but we will always be grateful, since thanks to them, our ever-changing journey is still boldly unfolding - so stay connected and updated to find out about any new and exciting projects we present to the world in the near future!
        </p>
        <p><i>Have any further questions? Don’t hesitate to reach out.</i></p>
        `,
      },
    ],
    hitech_projects: [
      {
        id: "siemens-spc-anywhere",
        src: "siemens",
        title: "Siemens SPCanywhere",
        products: [
          {
            id: "siemens",
            src_float_right: "siemens",
            images: [
              {
                paragraph: 1,
                image: "siemens-icon",
                styles: `
                  max-width:100px;
                  float:left;
                  margin-right:20px
               `,
              },
            ],
            title: "Siemens SPCanywhere",
            desc: `<p>PhoneGap, HTML, CSS</p>`,
            text: `
              <p>
              The Adobe PhoneGap Android based  application allows its users to access their Siemens SPC Intrusion system remotely. SPC is an innovative burglary alarm system which  allows users to make  their premises secure, e.g. their homes, offices or summer cottages. SPCanywhere enables users to view and control several sites. Using SPCanywhere users can set or unset their SPC Intrusion system, open doors, control outputs and check the status of their installations.
              </p>
              <p>
              With the help of IP cameras, users can even get  live images from selected sites.
              </p>
              <p>
              A graphical map view visualizes the installation and allows  the users to quickly see the status of their premises
              </p>
              <p>
              All a user  needs to do to set up his home automation environment on his Android phone/tablet, is to specify the IP address of his Siemens SPCanywhere controller. The app will manage everything else. It’s pretty easy to install, set up and work with the app developed by us for Siemens.
              </p>
            `
          },
        ],
      },
      {
        id: "citrix-startup",
        src: "citrix",
        title: "Citrix Startup Accelerator",
        products: [
          {
            id: "citrix-startup",
            src_float_right: "citrix",
            title: "Citrix Startup Accelerator",
            src_icons_top: ["citrix"],
            desc: `<p>Adobe CQ 5 framework</p>`,
            text: `
              <p>
              This site was built using Adobe CQ framework for Citrix.com as an informational portal developed to promote Citrix Labs; an investment program involved with enterprise startups who are in the process of creating the next generation of cloud infrastructure services, mobile enterprise solutions and collaboration technologies.
              </p>
              <p>
              The best feature of the site is that it is fully customizable, using the backend developed by us with  Adobe CQ.
              </p>
              <p>
              Initially the client prefered WordPress to manage their site’s content. We implemented WordPress customization as well,  however, Citrix’ policy was to move all internal projects to Adobe CQ platform , therefore we moved all CMS key moments from WordPress to Adobe CQ to accommodate them.
              </p>
              <p>Here is a link to their site http://citrixstartupaccelerator.com.</p>
              <p>
              It looks like Citrix doesn't support citrixstartupaccelerator.com any longer, though Google keeps a lot of information about that great platform.
              </p>
            `,
          },
        ],
      },
      {
        id: "telemedicine-products-and-startups",
        src: "telemedicine",
        title: "Telemedicine products and startups",
        products: [
          {
            id: "psyc-wave",
            head_text:"Unfortunately, we are not authorized to disclose the client's name publicly, however, it was a great Telemedicine startup that was purchased in 2018 by one of the bigger players in the Telemedicine arena and the products came to be the property of the buyer -  though it's worth  mentioning a few of the products that we developed for the client which helped it to become notable in the telemedicine industry and to be taken over by a more significant player.",
            src_float_left: "psycwave",
            title: "PsycWave (AMX/Cisco)",
            src_icons_top: ["amx", "cisco"],
            desc: `<p>Java, Netlinx, IOS</p>`,
            text: `
              <p>
              A joint project for iOS by two prominent IT corporations: AMX and Cisco. PsycWave is a revolutionary project which converts a standard classroom into a distance learning classroom by providing intuitive content control and an enterprise-quality TelePresence connection between classrooms. The hardware partly consists of AMX NI 3100 processor and Cisco C90 codec. The app includes:
              </p>
              <ul>
                <li>
                the ability to control all video conferencing hardware in the room;
                </li>
                <li>drag-and-drop support;</li>
                <li>
                support for up to four HD displays and five HD sources;
                </li>
                <li>
                ability to run the application on multiple devices in the same room;</li>
                <li>setup and maintenance wizard.</li>
              </ul>
              <p>
              Finally, the device was rebranded into Aviza Educator and presented at the InfoComm 2013 conference in Orlando, Fl.
              </p>
            `,
          },
          {
            id: "video-cloud",
            src_float_right: "videocloud",
            title: "Video Cloud",
            desc: `<p>Node.js, IOS, Android, Tokbox, Vidyo, SIP</p>`,
            text: `
              <p>
              Initially, the system was aimed at setting up an easy connection between patients and doctors’ colleges to define a diagnosis quickly and effortlessly, as well as to discuss all the details of future medical treatments, and it’s also worth mentioning that during the development stage, the client defined even more areas of the system’s usage.
              </p>
              <p>
              The system allows you to set up a High-Quality video conference in minutes from anywhere, from any device and any compatible software (Cisco Jabber, Polycom RealPresence, or Microsoft Lync). An iOS/Android app doesn’t require any complicated configuration and therefore the user needs only to accept an invitation to join a video conference, or specify their email address to allow the server software to set up everything on their behalf.  This system features the following:
              </p>
              <ul>
                <li>
                full history of video calls;
                </li>
                <li>
                  access to recorded conferences stored in the cloud;
                </li>
                <li>
                  Far End Camera Control (FECC): one can remotely control the camera pan and zoom;
                </li>
                <li>
                Screen Sharing: with just one  click,  broadcast presentations, documents, etc. can be shared;
                </li>
                <li>
                A scalable system that allows you to manage subscriptions easily when scaling accounts up or down;
                </li>
                <li>
                Safety & Security: HIPAA compliant privacy, security features and server redundancy keep users safe while minimizing downtime.
                </li>
              </ul>
            `,
          },
          {
            id: "virtual-reception",
            src_float_left: "virtualreception",
            title: "Virtual reception",
            desc: `<p>Objective C, SQLite, Rest, WebRTC, TokBox, Vidyo</p>`,
            text: `
              <p>
                This app is a virtual hospital reception service  The user is able to connect to a virtual doctors’ network for online consultations.
              </p>
              <p>
                Initially, the user describes his symptoms, and the virtual reception researches the symptoms and has an option to request additional information from the user. Once the initial inquiry is made, the receptionist refers the inquiry to the most appropriate doctors. The patient receives the doctors’ available time slots, and then he may pick an appointment that is suitable for him.
              </p>
              <p>
                Once the appointment is set, the user gets the app's invite to join the highly secured video conference with the doctor.
              </p>
              <p>
                The doctor answers the patient's questions during the highly secured video conference and sets a medical diagnosis which is followed by a prescription, if necessary.
              </p>
              <p>
                There is a wide network of pharmacies that are registered with the program. The user can pick a pharmacy located within the radius set in the app, or order online for delivery.</p>
              <p>
               All the prescription information is stored in the app, and  the user may request any clarification from the doctor in an in-app chat.
              </p>
              <p>
               The doctor can schedule the next appointment for the patient after the medical inquiry/examination.
              </p>
              <p>
                All virtual visits/consultations, prescriptions and therapy results are stored securely in the app.
              </p>
              <p>The app is completely HIPPA compliant.</p>
            `
          },
        ],
      },
      {
        id: "resolute-intranet-and-sundashboard",
        src: "resolute",
        title: "A few medical HIPAA compliant intranets examples",
        products: [
          {
            id: "resolute",
            title: "Resolute Intranet / ITA dashboard",
            images: [
              {
                paragraph: 1,
                image: "resolute1",
                styles: `
                max-width:150px;
                float:right;
                margin-left:20px;
             `,
              },
              {
                paragraph: 3,
                image: "resolute2",
                styles: `
                  max-width:500px;
                  float:left;
                  margin:10px 20px 10px 0;
               `,
              },
              {
                paragraph: 5,
                imagesgroup: ["angular", "mandrill", "twilio"],
              },
            ],
            desc: `<p>Node.JS, Expressjs, Bookshelfjs, Bluebird, Socket.io + Primus, Mochajs, Redis, Siege, Rabbitmq, Chaijs, Gulp, Hippie, Knexjs, Lodash, Vagrant, Docker, Postgree SQL, Mongo DB</p>`,
            text: `
              <p>
              Our customer theitadvisors.com has various clients that he works with. Among  them there is a medical corporation which includes many different companies all over the world, selling various medical products.
              </p>
              <p>
              There are numerous consultants and members who rely on constant and timely communication, as well as being updated on everything that happens within the company. Theitadvisors.com asked us to set up a system that would allow tracking everything in real time, including:
              </p>
              <ul>
                <li>
                   Login using Microsoft Active Directory Fideration Services;
                </li>
                <li>
                  Access to corporate email using SSO Authorization;
                </li>
                <li>
                  Calendar events syncing via MS Exchange;
                </li>
                <li>
                  Global SMS warnings via <a href="http://twillo.com" target="_blank">http://twillo.com</a>;
                </li>
                <li>
                  Forum infrastructure based on <a href="http://mutt.com" target="_blank">http://mutt.com</a>;
                </li>
                <li>
                  Real time notification via <a href="http://pubnup.com" target="_blank">http://pubnup.com</a>;
                </li>
                <li>
                  Mass mailing via <a href="http://mandril.com" target="_blank">http://mandril.com</a>;
                </li>
                <li>
                  Issues tracking based on <a href="http://bugherd.com" target="_blank">http://bugherd.com</a>;
                </li>
                <li>
                  Various informational features as FAQs, Links, News, Events, Files storage etc.;
                </li>
                <li>
                  Smart search for everything stored in the system using <a href="http://sphinxsearch.com" target="_blank">http://sphinxsearch.com</a>.
                </li>
              </ul>
              <p>
              The dashboard was built using Angular.JS which allows it to precache interfaces, as well as do online system work in the same way that a  common desktop application works, despite the system being full of fancy animation designed to make the final users fall in love with working the system.
              </p>
              <p>
              The client enjoyed  the system so much that Theitadvisors.com decided  to expand their system and make it scalable, as well as  easily customizable and to be  able to adapt the dashboard for the needs of their every client, as well as for their own staff using it.
              </p>
              <p>
              The next generation of dashboard has been recoded to Node.js - this was by the client’s request. Beside the features listed above, the dashboard also has following features:
              <ul>
                <li>
                Google domain for business authorisation;
                </li>
                <li>
                Documents storage  in Google Drive using GDrive API;
                </li>
                <li>
                  Many various Angular based forms with 300+ different fields;
                </li>
                <li>
                  Versioning system for data;
                </li>
                <li>
                Self made WiKi with tracking of all changes.
                </li>
              </ul>
              </p>
            `,
          },
          {
            id: "sundashboard",
            title: "Sun Dashboard",
            src_icons_top: ["react", "redux"],
            desc: `<p>Node.js, pm2 - server side; React, D3, Sigma.Js, Redux, Bootstrap - client side; MSSQL</p>`,
            images: [
              {
                paragraph: 4,
                image: "sundashboard",
                styles: `
                  max-width:500px;
                  float:right;
                  margin:10px 20px 10px 0;
                `,
              },
            ],
            text: `
              <p>
              This is a dashboard aimed at displaying a graphic presentation of the statistical information. The problem is that  personal data of all the Prescribers, Patients and Pharmacies are stored on the remote MSSQL server and we are not able to maintain permanent connection to the server, since all data there is HIPAA compliant.
              </p>
              <p>
              To display data on the dashboard, we therefore have to pre-calculate all data on the secured server and then we need to send JSON files with re-calculated information to be displayed on the dashboard server. The pre-calculated information is actually an analytical prediction of the future users’ performance, based on previous performance changes, which were originally  based on Trends and PSI factors.
              </p>
              <p>
              JSON may have up to 200.000 records with up to 10 fields in each , therefore we use streaming data while downloading to manage a synchronous calculation from all the obtained data while the whole package of data has not been received.
              </p>
              <p>
              The dashboard allows admins to manage various filtering/sorting options from among the received data.
              </p>
              <ul>
                <li>
                React.js and Redux were used to develop the dashboard.
                </li>
                <li>
                Saga Redux was used for async working with data streams.
                </li>
                <li>
                Redux Route was used for keeping route in a stage.
                </li>
                <li>
                A barely customised D3.js was used for displaying graphics.
                </li>
                <li>
                Saga.js was used for neural network calculation and visual displaying of the links in the network.
                </li>
              </ul>
            `,
          },
        ],
      },
      {
        id: "laspi",
        src: "al-based",
        title: "Intranet with AI-based site visitors behavior prediction",
        products: [
          {
            id: "intranet-laspi",
            src_float_right: "laspi",
            title: `Intranet for laspi.com `,
            desc: ``,
            text: `
              <p>
                <a href="https://laspi.com/" target="_blank">Laspi.com </a>  is one of the biggest tourist agencies in Crimea. Their business model is quite complicated, as they rent out many hotels (completely or partially, e.g. an entire floor) and resorts in Crimea, as well as  selling their tours all over the world. Laspi has quite a few branches and partners, and their accounts settlement rules are quite sophisticated:
              </p>
              <ul>
                <li>
                Tourist may use various currencies when paying in cash, as well as using wire transfers
                </li>
                <li>
                Crimean hotels have various accommodation tariffs based on the number of tourists per room (extra bed for an adult/child also affects the price calculation formula)
                </li>
                <li>
                The accommodation prices are seasonal (e.g. there are several peak season periods during  summer)
                </li>
                <li>
                Extra services such as transfer, SPA, massages, etc.  are also available for purchase.
                </li>
              </ul>
              <p>
              Since both Laspi and their partners all have different components involved in their  accomodation price calculation formula, the system allows them to manage their accounts settlement pretty easily.
              </p>
              <p>
              To become a professional tourist agency manager and get to know all the details of that business, one needs many years of work and training, therefore the system is also aimed at eliminating the human factor and reducing its impact on the business. The system enabled Laspi to use inexpensive tour operators’ services to sell their tours.  These days Laspi managers are able to get to know the system within a week and begin selling  tours immediately. The system suggests an appropriate hotel/room based  on the tourist’s needs and expectations, and does  all the calculations automatically. The tour operator doesn’t need to know the number of hotel rooms available, since the system provides a hotel load graph and the only thing you have to do to locate a tourist is to drag-and-drop them over the graph. So, the human error factor is reduced to almost zero.
              </p>
              <p>
              We spent a month on a business trip communicating with this client, in the interest of  understanding their business model and to suggest an appropriate solution which would meet their budget requirements.
              </p>
            `,
          },
          {
            id: "behaviour-laspi",
            src: "",
            title: `Users' behaviour prediction <a href="https://laspi.com" target="_blank">laspi.com </a>`,
            desc: ``,
            text: `
              <p>
              Laspi directors were happy with the system we had developed,  and since they have many site visitors and invest wisely in many successful advertising campaigns, they asked us to consider ads expenses optimization and helping them achieve  maximum profit. Having analyzed their traffic, we offered them a way to make a keyframes graph of their site visitors’ behaviour, as well as using a hierarchical clustering algorithm to turn those graphs into a self-learning neural network. Then once the neural network was ready, we were able to predict the users’ behaviour and use a short path problem solving algorithm to show relevant content to the user.
              </p>
              <p>
              Now the Laspi website is able to predict users’ behaviour and set user roles once a  user has spent some time browsing the site. For example, there are roles such as Regular Visitor, Potential Tour Buyer, Potential Partner, Advertising Agency, etc.  Therefore, if we deal with a tour buyer, the system defines whether they are interested in a particular hotel and shows the relevant information to the tourist. If the system defines a potential partner, it notifies Laspi managers and the site offers the visitor the chance to  chat with one of the Laspi managers. The more users visit the Laspi website, the more roles set by the managers are  confirmed, and the more accurate users’ behaviour predictions they receive .
              </p>
            `,
          },
        ],
      },
      {
        id: "hygh",
        src: "hygh",
        title: "Innovative advertising system to manage billboards online",
        products: [
          {
            id: "hygh",
            src: "hygh",
            title: "HYGH tech",
            src_float_left: "hygh",
            desc: ``,
            text: `
            <p><a href="http://hygh.tech" target="_blank">HYGH</a> is an ambitious German startup that is aimed to make a revolution in billboards advertising. I was a part of the team that worked on MVP for HYGH. The idea of the project is pretty simple. The client can define areas of the advertising space ( Usually it's an Android box connected to a TV or a huge TFT panel) and to establish a behavior of each area, that could be a running text, video, or a picture or a sequence of them. The user-friendly interface allows to turn complicated advertising materials editing/formatting into fun.
            </p>
            <p>
            A predefined advertising program may be used in both offline and online mode. Offline mode is a precompiled app that the user uploads to an Android stick.
            </p>
            <p>
            It is worth mentioning that currently HYGH is the platform based on GoLang. However, initially we implemented the idea of the startup using Laravel, Vue.js and Angular. Hygh.tech has the best marketing team. They promoted the MVP perfectly and got enough investment. After that, they considered purchasing another German startup that already had the platform for streaming video on billboards. However the investments were received with help of MVP that our team developed for them.
           </p>
            `,
          },
        ],
      },
      {
        id: "seo-reporter",
        src: "seo-reporter",
        title:
          "Analyzer for the leaders of analyzing (Google, Sistrix, Advancedwebranking, Onpage etc)",
        products: [
          {
            id: "seo-reporter",
            src_float_right: "seo-reporter",
            title:
              "Analyzer for the leaders in the world of analyzing (Google, Sistrix, Advancedwebranking, Onpage etc)",
            desc: `<p>Backend: React.js. PhatomJS, PostgreSQL,
            Frontend: Node.js, Express, NSQD</p>
            `,
            text: `
              <p>
              This project is an extremely powerful analyzing tool which  combines experience  with the data gained from promotion systems, such as Google Search Console (GSC), Onpage, Sistrix and AWR (Advancedwebranking), etc. Our system combines their data and calculates a median which is even more accurate than other systems. Once we worked with a client specializing in banking, and when their bank was in the process of launching a large marketing campaign, they added different analyzing tools to their websites. Having analyzed their  data, we viewed  the data from various analytics tools to find a  different perspective. For example, the data from Google Search Console (GSC)  was different to the data from Sistrix , therefore our system calculates a median and provides an extremely accurate value indicator, …and we were  pleasantly surprised to not  have found such an option at Google before we had created it.
              </p>
              <p>
              The thing is, Google shows data for the most recent 90 days only, while our SEO-reporter allows you to receive  and filter data for an indeterminable time period instead. Moreover, we added some extra widgets with which  the client is able to assign the data type for both X and Y axes and build a custom graph, as well as being able to select any of the default widgets. The fact that the system is  able to save the settings, makes it extremely user-friendly ,  and furthermore, there is a small cheat option hidden, which has the  ability to adjust data on the graph and constantly maintain your reports.
              </p>
              <p>
              In addition, we extended the amount of data by merging different promotion systems. For example, Google allows authorized users to define their language, age, gender, employment and income, as well as  other options, while unauthorized users may only define their location. However, a user might be logged into another system, e.g. there are more  people using MSN instead of Google for their everyday need ,  so for those users, we collect the data from MSN analytics and combine them with the data  received from  Google users. Such an approach allows us to obtain  more data and apply various filters, e.g. to find out sales correlations which are based on season and gender/age criteria.
              </p>
              <p>
              In other words, we took the data from  famous tools and used their experience to improve data representation, as well as putting in vast amounts of  effort to combine the data filtering in from various sources into a far more powerful tool!
              </p>
            `,
          },
        ],
      },
      {
        id: "seeking-simple",
        src: "search-engine",
        title: "Search engine to match lifestyle and dietary needs ",
        products: [
          {
            id: "seeking-simple",
            src_float_right: "seekingsimple",
            title: "Seeking simple",
            desc: `<p>Backend: PHP 7.2.2, Laravel 5.6, MongoDB 3.6.
            Frontend: VueJs 2, Bootstrap 4</p>`,
            text: `
              <p>
              This is a search engine which enables you to find products that match your lifestyle and dietary needs.
              </p>
              <p>
              It allows consumers, or professional nutritionists to create personal accounts and dietary sets that they  may use to find and select products matching certain requirements.
              </p>
              <p>
              Consumers get  detailed information about products they are interested in and this helps them make an informed decision  when choosing the right product for their needs.
              </p>
              <p>
              Each consumer is able to create a Dietary Set that meets their nutritional requirements in a quick and simple process. This Dietary Set is used as a 'filter' while choosing products, i.e. one can add, delete or rank-order the products that meet their dietary requirements.
              </p>
              <p>
              ither a brand company or their authorized agents can load, update and manage information regarding their products, as well as keeping their clients updated of special offers with barely any effort.
              </p>
              <p>
              The system investigates the clients’ preferences and tries to offer them the exact products they are looking for. For example, a customer is typing “Tomato”, and there are many products with this word in the title (it can be tomato pasta, ketchup, powder, etc). However, if the user already has a set of selected products, so that the system defines that he is mostly interested in a tomato vegetable, then the first product suggested will be a vegetable.
              </p>
              <p>
              Moreover, the system always suggests products using an effective algorithm for related products. The more products the user selects, the more relevant suggestions the system will be providing.
              </p>
              <p>Integrated services:</p>
              <ul>
                <li>Facebook oAuth</li>
                <li>Pinterest</li>
                <li>Google maps</li>
              </ul>
            `,
          },
        ],
      },
      {
        id: "razzo",
        src: "razzo",
        title: "Razzo is analytics tool for Magento to scale up the business",
        products: [
          {
            id: "razzo",
            src_float_left: "razzo",
            title: "Razzo",
            desc: `<p>Backend: The project architecture is built on Laravel, using the MySQL data management system.</p>
            <p>Frontend: Tailwind CSS, Vue.js, charts embedded using ApexCharts.js</p>`,
            text: `
            <p>Razzo is an effective tool for collecting statistics for Magento sites. Thanks to easy-to-use infographics and in-depth information, the owner of an eCommerce store on Magento can get a complete analysis of the sales of his products, draw up a portrait of the client and analyze his behavior. For example, you are running an advertising campaign to increase sales on your site; this tool allows you to track all key indicators in detail, and displays them in simple and illustrative graphs.
            </p>
            <p>
            For the continuous operation of widgets and data import, a Laravel-based data collection system has been created, built on server request queues.
            </p>
            <p>
            Our team had faced the problem of huge amount of data that needed to be processed. That implied a high load on the Magento servers, which, in turn, could lead to such requests being blocked. To solve this problem, we created a system of parallel chains of query workers, which takes into account the current load on the server and adjusts the sending of queries to it.
           </p>
           <p>
           One of the unique features of this project is a feature that allows to select relevant products for each item based on the most purchased of them. Since Magento's standard tools do not offer this option, Razzo gives the opportunity to the customer to import information on their site using the Magento API and display relevant products to customers.
           </p>
           <p>
           <strong>Future plans:</strong> Synchronization with Google tools and other popular CMS platforms.
           </p>

            `,
          },
        ],
      },
    ],
    mob_projects: [
      {
        id: "amx-modules",
        src: "amx",
        title:
          "Not trivial mobile, but still mobile modules - a great example to indicate a phase in a very exciting part of our non trivial  journey",
        products: [
          {
            id: "amx-modules",
            src_float_right: "amx",
            title: "AMX modules",
            src_icons_top: ["amx"],
            desc: `<p>NetLinks, Java Cafe Duet, TP4</p>`,
            text: `
              <p>
              Within <a href="https://store.touchpanelcontrol.com/" target="_blank">TouchPanelControl</a> we developed a few exciting modules for AMX controllers. The technologies used for module’s composing are Java Café Duet and native AMX development language (NetLinx), which  provides the ultimate compatibility with old AMX controllers.
              </p>
              <p>
                <strong>XBMC Control</strong> module allows  its users to easily manage local and cloud-based media with a wide range of features and content for AMX control interface: track listing, cover art and playlist creation.
              </p>
              <p>
                <strong>Apple Media Control</strong> module provides  its users  with an entirely new musical experience to enjoy while  listening to their shared and online Apple iTunes content. The module has features like track listing, cover art, playlists, library browsing, etc. The Apple Media module provides unprecedented control that takes the pleasure of listening to music to an entirely new level.
              </p>
              <p>
                <strong>Sonos control</strong> module introduced  the Sonos experience to the touch panel interface. With the built-in ability of controlling individual Sonos Zones and the power to enable grouping and ungrouping, the Sonos Module displays all the user’s favorite music, as well as Radio and Line-in selection items. The module allows browsing the music and selecting which zone to control, changing the volume of group several areas together, all with the convenience of touch panel control.
              </p>
            `,
          },
        ],
      },
      {
        id: "shout-outs",
        src: "apple",
        title: "The app that pretended to compete with  Apple Music",
        products: [
          {
            id: "shout-outs",
            src_float_right: "shoutouts",
            title: "ShoutOuts",
            desc: `<p>iOS SDK, Facebook SDK, Mongo DB,SQLite, Postgree SQL Echoprint</p>`,
            text: `
              <p>
              This Facebook-based social network ; which uses a FB database , allows music sharing amongst its members. The mobile application uses the iPhone’s microphone to record a piece of music being played, then it identifies an acoustic fingerprint created on the sample and searches  through the central fingerprint database for a match. The song’s information is displayed to the user if a  match is found.
              </p>
              <p>
               We used <a href="http://echoprint.me/" target="_blank">EchoPrint</a>’s identification server to find  the fingerprints, since their DB uses <a href="https://musicbrainz.org/" target="_blank">the largest music encyclopedia database</a>. There is a collection of more than 500,000 songs, and users can operate with the shared music in much the same way that they do  on Facebook, such as ‘Like’, ‘Share’ etc. The users are able to setup their own ‘radio station’ based on the songs they love, as well as songs recommended by the system. The product uses Amazon S3 for storing the information and EC2 to operate; MongoDB and Tokio Cabinets are used for storing music.
              </p>
              <p>
              ShoutOuts tentatively competed with Apple Music and Spotify. Unfortunately, the client was not able to invest enough to become a significant competitor among  the leaders of the streaming music industry.
              </p>
            `,
          },
        ],
      },
      {
        id: "touchpanel",
        src: "touchpanel",
        title:
          "Revolutionary app to replace expensive  devices which  opened many doors for us",
        products: [
          {
            id: "touchpanel",
            src_center: "touchpanel",
            title: "TouchPanelControl.com",
            src_icons_top: ["amx"],
            desc: `
              <p>Web:  PHP, Node.JS,  Angular 2, Magento, Golang</p>
              <p>Devices:  Java Java ME, Netlinx, junit, testng </p>
              <p> Mobile (Android, iOS, Windows):  AudioToolbox, Speex, CoreGraphics, CoreAnimation, CFNetwork, libxml, SQLite, GCM, Speech to text, Text to speech. Android SDK, NFC, SIP, websocket, primus, redis, directX</p>
            `,
            text: `
              <p>
                <a href="https://store.touchpanelcontrol.com/" target="_blank">TPControl</a>  is the most exciting project we have worked on to date.  It allows its users to manage their <a href="https://www.amx.com/en-US" target="_blank">AMX controllers</a>  for home automation through a mobile phone instead of using   <a href="https://www.amx.com/en-US" target="_blank">AMX touch panels</a>.
              </p>
              <p>
              AMX systems are configured from modular hardware, allowing systems to be customized to meet current needs. Typically, AMX equipment is used in room automation for “smart houses”.
              </p>
              <p>
              In a simplified way, AMX controllers can be compared with a  server that handles various devices connected to it - in the AMX world,  the devices are all household appliances. AMX touch panels are much like a  tablet with open browsers  displaying “web pages”  which are coming from the server (controller).
              </p>
              <p>
              AMX uses its own language - NetLinx and/or Java Cafe Duet to program the controller. Touch panels use their own markup language called TP4 to process and display the information coming from the controllers.
              </p>
              <p>
              Following this simplified method s of communication between AMX touch panels and AMX controllers, our multi platform application can be considered as the  ultimate browser, able to replace AMX touch panels with the user’s favorite device (iPhone, iPad, iPod Touch, Android or Win8) that has TPControl installed.
              </p>
              <p>
              The added benefit to using our application is that the user doesn’t have to pay for expensive AMX touch panels.
              </p>
              <p>
              Another benefit is that unlike common touch panels, TPControl is able to work with multi TP4 files and switch between them seamlessly  with one touch. It is also possible to control household appliances via mobile connection.

              </p>
            `,
          },
        ],
      },
      {
        id: "gameit",
        src: "gameit",
        title:
          "Mobile gaming platform to promote any product in the most cost-effective way",
        products: [
          {
            id: "gameit",
            src_float_right: "gameit",
            title: "Gameit.us",
            images: [
              {
                paragraph: 2,
                image: "gameit2",
                styles: `
                  max-width:350px;
                  float:left;
                  margin:10px 20px 10px 0;
               `,
              },
            ],
            desc: `<p>Objective C, Leanplum, Fabric: Crashlytics, Branch, Stripe (for online payments), Services for showing Ads: UnitiAds, Vungle SDK-iOS, Ad Colony, CocoaPods</p>`,
            text: `
              <p>
              The project is based on a really revolutionary idea that allows its author to promote any product and to earn money from  people competing  to win a product. The project is a gaming platform which makes it fun for users to interact with  ads. The user can choose to play  various trivia games to win real prizes, or even earn coins or tokens (an internal currency that provides users with additional abilities  or discounts of between  60 to 80%  when purchasing their products).
              </p>
              <p>
              Users can also create an exclusive game with between 2 and 12.000 players and challenge the other players which they’ve included.
              </p>
              <p>
              The winner gets the prize, the others earn tokens or coins which can be used for buying products. The user not only  sees his own scores, but also   the scores of the previous winner, as well as the  top 10 players - there are 2.000-3.000 users that use  this app daily. An In-App Purchase feature is also integrated into the app for purchasing  tokens and coins. Stripe service is used for online payments via credit cards.
              </p>
              <p>
              We developed and designed the app for the client from the ground up and supported it for over 3 years. The client received  significant investments once the app was released that allowed them to promote it even more widely. Unfortunately something went wrong, and the client’s business had to cease trading, but none the less, it was a pretty cool app with so much more potential to explore.
              </p>
              <p>
              Despite the company gameit.us suffering from ‘game over’ blues, you may still find many of their previous promotion campaigns, comment threads and app reviews online.
              </p>
            `,
          },
        ],
      },
      {
        id: "truebill",
        src: "truebill",
        title: "A real-life subscriptions' analytics and managing tool",
        products: [
          {
            id: "truebill",
            src_center: "truebill",
            title: "Truebill",
            // link: "https://www.truebill.com/",
            desc: ``,
            text: `
              <p>
                <a href="https://www.truebill.com/" target="_blank">Truebill.com</a> is a unique system that is aimed at helping users to analyse all their subscriptions, as well as managing and analysing  bills which users pay monthly.
              </p>
              <p>
              The bills are ordered by the system from a  3rd party service (e.g. dropbox, office36, amazon, godaddy etc), which makes  it transparently easy for a user to see what they have been charged for. The system provides all users with the opportunity to cancel any subscription directly from  the backend, without having  to contact a 3rd party service directly. The users are also able to set/see the rating of a 3rd party service , and based on those ratings, the users are able to make  better choices or find cheaper alternatives of the service that they use.
              </p>
              <ul>
                <li>
                Node.js and React were chosen for this project’s development.
                  </li>
                <li>
                Plaid.com API was  implemented to obtain  information about users bills, payments and credit cards.
                </li>
                <li>
                Redux was used to control the app state.
                </li>
                <li>
                Relay/GraphQL were used for server/client side communication.
                </li>
                <li>
                D3.js was  chosen for  displaying graphical information.
                </li>
            </ul>
            `,
          },
        ],
      },
      {
        id: "games",
        src: "games",
        title: "Multiple attempts in our own games development journey",
        products: [
          {
            id: "games",
            title: "Games",
            more_content: [
              {
                title:'VIKINGS & DRAGONS',
                desc: `<p>This concept was a pleasure to work on, with rich graphics and colourful characters. Beautiful illustrated heroes and dragons battled it out in a Norse viking setting.</p>`,
                image_src: ["vikings-1", "vikings-2"],
              },
              {
                title:'MYSTIC MINERS',
                desc: `<p>This game concept is a grat example of character and set design. The wonderfully textured blocked set was an editable playground for the characters.</p>
                <p>All the blocks were capable of being mined or built upon, providing the characters with resources, access to tunnels and caves as well as releasing monsters and treasures.</p>
                <p>Water and lava flowed throughout the sets, and provided the characters with obstructions. You could build bridges over them or release the water and lava to meet and have the forces of nature stop each other.</p>`,
                image_src: [
                  "mystic-miners-1",
                  "mystic-miners-2",
                  "mystic-miners-3",
                ],
              },
              {
                title:'SQUISHY HALLOWEEN',
                desc: `
                <p>A seasonal spin off from the popular game "Squishy fruit", this tap game involved squishing pumpkins, bats and witches.</p>`,
                image_src: "squishy-halloween-1",
              },
              {
                title:'CAR PARK CONTROL',
                desc: `
                <p>A car parking challenge app with two play modes, lots of characters and multiple maps. Lear more about this project in our <a href="/portfolio">portfolio</a>.</p>`,
                image_src: "car-park-control-1",
              },
              {
                title:'FLICKY CHRISTMAS',
                desc: `
                <p>A holly jolly Christmas seasonal app, where you help Santa fill his sack with goodies by flicking them in one at a time.</p>`,
                image_src: "flicky-christmas-1",
              },
              {
                title:'CHARACTER & SET ILLUSTRATION',
                desc: `
                <p>A few examples of our character and set design concept illustrations. Here at WDevs we can take your idea and give it life. <a href="/contacts">Contact us</a> and let us make your idea for a game into a reality.
                </p>`,
                image_src: [
                  "character-1",
                  "character-2",
                  "character-3",
                  "character-4",
                  "character-5",
                ],
              },
            ],
            images: [
              {
                paragraph: 1,
                image: ["coronalabs"],
                styles: `
                  max-width:250px;
                  float:right;
                `,
              },
              {
                paragraph: 2,
                image: ["games"],
                styles: `
                max-width:320px;
                float:left;
                margin:10px 20px 10px 0;
              `,
              },
            ],
            desc: ``,
            text: `
              <p>
              We developed a series of our own games using the <a href="http://www.anscamobile.com/corona/" target="_blank">Corona framework</a>. Games development  was 100% of our investment. We were trying  to turn something fun and exciting into money making. All of the ideas for the games, scenarios, graphics and sound were innovatively created  by the games development team. Our first game was quite primitive since we did not focus on necessarily developing a successful game, it was merely a first attempt in learning what would work best for us. However, because of being popularly associated with a trending  game at the time ‘Fruit Ninja’ , became a very  sought-after game and their iOS version had about 300K monthly downloads - that truly inspired us to continue with future games development projects.
              </p>
              <p>
              Some games have a really attractive game play. We brainstormed among ourselves to invent some incredibly attractive heroes, awe-inspiring cars and mind blowing accident  scenes for our Car Park Control game.
              Some games had revolutionary scenarios, such as Zombie Puzzle Invasion which combines “match 3” and RPG genres.
              </p>
              <p>
              Both Galaxy Defender and Titan Saga are pleasantly fun shooters with stunning cartoon graphics and cool audio effects.
              </p>
              <p>
              Witchy Halloween, Dragon Joyride, Tourtley Joyride and Airmaster are fun infinite games with simple press the screen control, that makes a hero go up once the screen is clicked and fall down once the finger has been removed. There are magical things happening and obstacles that the game’s hero needs to overcome. The heroes and their vehicles have different personalities and behaviour traits, making these games worthy of your spare time.
              </p>
              <p>
              We were successful in developing the games and attracting  a significant audience all wanting to play, however after the initial investment period, we found  that the income generated from the games didn’t  cover our support expenses, therefore we decided to close the doors on our gaming  development adventure.
              </p>
              <p>
              Even so, our games development journey was a shining example of what incredible heights our experience can lead us towards, and  they deserve to be  mentioned in our portfolio.
              </p>
            `,
          },
        ],
      },
      {
        id: "california-crane-school-certification-system",
        src: "education",
        title:
          "Education and certification platform that was ahead of its time in a non-pandemic world",
        products: [
          {
            id: "california-crane-school-certification-system",
            src_float_right: "californiacrane",
            title: "California Crane School Certification System",
            desc: `<p>Node.js, Adobe Cordova, Android SD, FFMPG</p>`,
            text: `
              <p>
              A  unique testing platform developed for the United States Occupational Safety and Health Administration’s (OSHA) Crane Compliance. The platform provides a specific environment to manage the testing of crane operators, anytime and anywhere. The platform consists of the following functional modules:
              </p>
              <ul>
              <li>
              Android application for managing theoretical tests based on multiple-choice questions. The candidate has to answer the questions by selecting one of the proposed options. Some questions require using reference materials and making complicated calculations. Smart notes and engineering calculators are built into the application.
              </li>
              <li>
              Android application for test coordinators (TC) to manage the class during e examinations. TCs are  able to sign  candidates in who have been assigned to take the exam , see the status of each candidate’s test , as well as control and set up the video cameras which will control the class during the test.
              </li>
              <li>
              Android application for managing a practical examination which  has step-by-step instructions, as well as a  unique interface for the test coordinator to keep track of the progress from each finalised stage.
              </li>
              <li>
              OSHACC backend server equipped with the ability to  compile test questions using our exciting “Test maker” software. The backend allows to setup candidates, test coordinators, chief examiners, classrooms and other environments.  All candidates’ results ; including videos captured from different corners of the classroom, are stored  in the backend too.
              </li>
              <li>
              Proxy server is a gateway between the classroom and OSHACC backend server. It provides the connection  to various cameras to monitor the classrooms during  examinations, connects the test candidates’ Android tablets directly to their coordinator’s tablet , securely stores all examination results during their relevant sessions and then hands  them over to the main server after completion of the exams.
              </li>
             </ul>
             <p>The site of OSHACC is <a href="http://oshacc.org" target="_blank">http://oshacc.org</a></p>
            `,
          },
          {
            id: "rocketship-education",
            src_float_left: "rocketship",
            title: "RocketShip Education",
            desc: `<p>PHP, Zend 2, JQuery, Doctrine</p>`,
            text: `
              <p>
                Being a Student Management System for teachers, this product helps teachers manage their students by tracking their grades, providing recommendations, uploading course information and assessment issues. Seven schools in Los Angeles are extensively using this system, which has <a href="https://www.nbcbayarea.com/news/local/rocketship_education_bay_area/1902106/" target="_blank">also caught the attention of the NBC recently</a>.  All the details of this project, which involved 5 developers working full-time on it, are available on the <a href="http://www.rsed.org/index.cfm" target="_blank">client’s website</a>.
             </p>
            `,
          },
        ],
      },
      {
        id: "ppc-editor",
        src: "google",
        title: "The app that Google wanted to purchase",
        products: [
          {
            id: "ppc-editor",
            group_images_top:['ppc1','ppc2','ppc3'],
            title: "PPC EDITOR FOR G1 (ANDROID)",
            desc: ``,
            text: `
              <p>
                It's an old app that we developed during the earliest age of Android and it would not be reasonable to mention that app, if not for the fact that Google appreciated our app; as well as our development approach, and they were considering purchasing our app instead of developing their own.
              </p>
              <p>
                There is nothing revolutionary about it today, but way back then Google had not yet developed  an app to manage their AdWords campaigns, so we saw it as a learning challenge and decided to bridge that gap by developing it ourselves.  Moreover, those days we promoted some of our products with the help of AdWords and decided that the tool would be pretty convenient for our marketing guys to remotely track expenses.
              <p>
            `,
          },
        ],
      },
    ],
    other_projects: [
      {
        id: "classiccar",
        src: "classiccar",
        title:
          "The ambitious website aimed to become the #1 competitor amongst 20.000 similar websites",
        products: [
          {
            id: "classiccar",
            src_float_left: "classiccar1",
            title: "ClassicCar.com",
            images: [
              {
                paragraph: 2,
                image: "classiccar2",
                styles: `
                max-width:150px;
                float:right;
              `,
              },
            ],
            desc: ``,
            text: `
              <p>
              This ambitious website aims to be the definitive portal for both sellers and buyers of classic cars all over the world.Having already cooperated with more than 5000  vehicle selling sites, ClassicCar will eventually partner with more than 20,000 such websites.
              </p>
              <p>
              Key  features of the website include an intelligent and flexible car classifying algorithm, amazing GUI using pure HTML 5,a Wiki-style ability for users to edit the information about  cars and an Asterix-based contact/inquiry mechanism for interested buyers to contact sellers.
              </p>
            `,
          },
        ],
      },
      {
        id: "vpn",
        src: "vpn",
        title:
          "Virtual private network which allows users to surf  the Internet from any virtual location",
        products: [
          {
            id: "vpn",
            src_float_right: "vpn",
            title: "VPNManager.com",
            src_icons_top: ["php", "technologies"],
            desc: `<p>BGP; policy routing; pptp and l2tp VPNs; authorization, authentication and accounting via RADIUS; multi-routing-tables.</p>`,
            text: `
              <p>
              Being a multi-country virtual private network, <a href="http://vpnmanager.com/" target="_blank">VPNManager.com</a> allows its members to surf the Internet as though they are surfing from any other country of their choice. This provides users with both  greater security and a consistent user experience, irrespective of where they are located. The service comes with an easy GUI that lets users easily set up the rules for surfing,  e.g. a user could set the rule to see the UK edition of the BBC from a  UK VPN server, or open SSH - allowed to the US users only via US VPN server.
              </p>
            `,
          },
        ],
      },
      {
        id: "quotation-junction",
        src: "quotation",
        title:
          "B2B/B2C lead-generation platform which connected buyers and suppliers all over the world for over  10 years",
        products: [
          {
            id: "qj",
            src_float_right: "qj",
            title: "QuotationJunction.com (QJ)",
            desc: ``,
            text: `
              <p>
              QJ was founded in 2005 and was around until 2016. It was one of the most significantly ambitious, high revenue, and long-term projects to be taken up at the time and the dramatic cliffhanger for QJ was in 2015 when Google changed their policies which required affiliates to gain permission from each merchant they wished to promote, before being permitted to commence with an Adwords campaign. It made the model QJ had used for years, completely unsustainable.
              </p>
              <p>
              After trying to exist without Google AdWords for a while, QJ faced that they could not maintain their advertising expenses and they sadly stopped existing.
              </p>
              <p>
              Even so, it was a great system and we were happy to be their main developers.
              </p>
              <p>
              This impressive project was designed and developed from scratch, based upon clients' requests. Originally, Quotation Junction had fewer employees available than the number demanded. However, the project had evidently evolved into a large, ongoing development with 5 full-time developers and this ensured that there was still room for the clients' business plans and models to expand.
              </p>
              <ul>
                <li>In-built affiliate management, tracking and reporting system;</li>
                <li>Auction-based model for setting fees;</li>
                <li>Post-paid and prepaid payment models for merchants;</li>
                <li>Customer support ticket systems;</li>
                <li>Integrated blogs.</li>
              </ul>
              <p>
              QJ was a B2B/ B2C lead-generation platform that aimed to generate a high volume of quality leads to its participating vendors and merchants purely on a pay-for-performance model. The lead-generation service was  available in  over 25 categories of both small- and big-ticket products and services. Prospective buyers could  submit generic "Request for Quotation (RFQ)" forms per product category, or product-specific RFQs and QJ would help buyers find the best supplier suited to the RFQ.
              </p>
              <p>
              Participating suppliers paid  a fee for every successful lead (RFQ) generated, which was  based on the category and the locations that they were  interested in.Additionally, the cost per lead could  be set by suppliers on an auction basis as well and   suppliers could  also control their marketing spend by specifying the maximum budget on leads per month.
              <p>
              There were  two types of suppliers: prepaid and postpaid. Pre-paid suppliers had  to top-up funds in their account to continue receiving leads from QJ, while postpaid suppliers had  to pay according to a monthly auto-generated invoice from QJ.
              </p>
              <p>
              QJ tracked  transaction histories  via  feedback from both buyers and suppliers, regarding  each other’s experiences. QJ also offered  excellent customer service with a LiveChat and  smart ticket system.
              </p>
              <p>
              All the content on the site was  managed  via an easy-to-use CMS. The main site administrator could  provide access to other users of the CMS with various  roles using a rights/permissions system that allowed  the users to read , write , edit and content.
              </p>
              <p>
              QJ also offered revenue generating opportunities for smart web publishers who could  participate in the QJ affiliate program and thereby got more suppliers/vendors to use the lead generation service. Besides an easy-to-use affiliate interface, the QJ affiliate management system helped affiliates generate revenues with excellent marketing support in the form of widgets and banners. They could also compile accurate reports and statistics on the performance of the various creative marketing tools, as well as all the commissions generated.
              </p>
            `,
          },
        ],
      },
      {
        id: "parliament-today",
        src: "parlient",
        title:
          "UK Parliament monitoring service existed since 1966 (a long time before we had become used to using the Internet)",
        products: [
          {
            id: "parliament-today",
            src_float_left: "parliament",
            title: "ParliamentToday.com",
            desc: ``,
            text: `
              <p>
                We have worked on this project development and support from 2009 till now.Since the site existed from the early years of the Internet and it was based on various outdated frameworks, in the period 2019-2021, the site was completely rebuilt to the modern platform based on Laravel/Vue.js. Considering that most subscribers are conservative UK gentlemen, we kept the interface similar to what the users had before.
              </p>
              <p>
              This website parses the information about actions taken by the government on various issues and delivers it to thousands of subscribers using various sets of smart filters to deliver the qualified information only. There are thousands of subscribers and gigabytes of daily updated information are sent to the clients every day.
              </p>
              <p>
              The service provides AI news recognition taking the information from various sources, including Parsers, APIs, Voice-to-text, PDF-to-text, Pictures-to-text.
              </p>
            `,
          },
        ],
      },
      {
        id: "price-comparison-sites",
        src: "comparison",
        title:
          "A series of price comparison sites with abilities to clone the sites to promote specific goods in a certain area",
        products: [
          {
            id: "price-comparison-projects-family",
            src_float_right: "pricefamily",
            title: "Price comparison projects family",
            desc: `<p>PHP, YII2 Gearman, Bootstrap, Angular</p>`,
            text: `
            <p>
            We’ve developed a number of price comparison family sites. Some of  the best examples are: ecompare.co.uk, compare99.com, price-click.co.uk, idealpricestore.com, pebble.co.uk, catwalk.co.uk, discountvouchers.co.uk, 18holes.co.uk, doingup.com, todaysfashion.com. The base of each of these sites  are to display, analyze and allow  a user to manipulate  information coming from various sources.
            </p>
            <p>
            The sources can be defined as:
            </p>
            <ul>
            <li>feeds provided by a  3rd party;</li>
            <li>modules to scrape information from open sources;</li>
            <li>manual data entering.</li>
            </ul>
            <p>The sites are developed with various features to make the browsing more effective: </p>
            <ol>
            <li>Different variations of search criterias</li>
            <li>Detailed comparisons</li>
            <li>Smart suggestions of relevant products based on site browsing </li>
            <li>Various rating systems and comments</li>
            <li>Organising products in various lists (eg. watch later, favorite, custom, etc.)</li>
            <li>And many others.</li>
            </ol>
            <p>The main advantage  of the system is that its structure is completely module based. The logic of each site is placed beside CSS, therefore a new site can be created rather quickly. All the client needs to develop a new site is to define a set of modules he would like to use on the site, configure the modules and slice the design into the template. There is a wide range of various modules to make the site look attractive, though it is easy to develop the new ones both for features  and for new data sources.
            </p>
            `,
          },
        ],
      },
      {
        id: "pharmaceutical-system",
        src: "pharmaceutical",
        title: "Pharmaceutical system",
        products: [
          {
            id: "pharmaceutical",
            src_float_right: "pharmaceutical",
            title: "Pharmaceutical system",
            desc: ``,
            text: `
            <ul class="first_list">
            <li>System sponsored by one of the biggest pharmaceutical companies to promote their products at chemists' shops and help them deliver medicines to consumers.</li>
            <li>
            Uses Perl as the underlying technology.</li>
            <li>
            A good example of our ability to work with other companies in system development, and produce large-scale systems and applications.
            </li>
            </ul>
            <p>
            It must be mentioned that we cannot take full credit for the development of the system, as one of the components to be used for PDAs using PalmOS was developed by another organization.
            </p>
            <p>
            The system is based on three dedicated servers, one of which receives requests from mobile devices and is used to synchronize mobile applications with the main system database using 'Net Update' module, developed by another company. The other two servers used for the work (a database (DB) server and HTTP server) were developed by us
            </p>
            <p>
            The DB server used a mySQL database to store the broad assortment of products from the pharmaceutical company. The front/back end server is an HTTP server that provides the system administrators with the ability to handle the base depot/ warehouse by keeping track of items and their assortment in the store.
            </p>
            <p>We chose Perl as a platform for the back-end for two reasons:</p>
            <ol>
            <li>to let HTTP server communicate with the Net Update server using the same programming language, and;</li>
            <li>the loading on the server is very high and we use threads to handle clients' requests to the server.</li>
            </ol>
            <p>Users of the system are authorised personnel or attorneys from the pharmaceutical company. Usually, attorneys are the owners of drug stores and are authorised to enter new attorneys in the system. Attorneys provide "floating" pharmacists access to the system to let them see medical goods available to them.
            </p>
            <p>
            There are different types of floating pharmacists who are authorised to do different kinds of work for the system. Floating pharmacists visits patients to provide them with consultations, to sell pharmaceuticals or to provide them with nursing services. They immediately record all the services provided via the PDA application or via the back-end admin interface using a computer connected to the Internet. The floating pharmacists are able to prescribe medicines via PDA to end consumers.
            </p>
            <p>
            Drugstores reserve required quantities of medicines. Every time the inventory falls below a specified level, the goods are replenished to the required quantity. The system also provides a credit system to let some drugstores order products using an "after sold" payment method.
            </p>
            <p>
            Detailed reports are available to let the company keep track of key sales data and the most profitable drugstores as well as help devise strategies to incentivise drugstores.
            </p>
            <p>
            In the subsequent phase of the project that we are working on now, the customer would like to allow the system to include multiple drug manufacturers. This is a complicated phase of the project, where we have to cater for a much higher system loading than at present. The basis for granting rights and privileges/powers for different users will also be much more complicated than it is now. Besides allowing members to work with different drug manufacturers, the latter will also be able to set their own price for the services offered by the floating pharmacists. However, the price bracket will be set by the main system administrator.
            </p>
            `,
          },
        ],
      },
      {
        id: "traffic-generation-system",
        src: "pharmaceutical",
        title: "Traffic generation system",
        products: [
          {
            id: "traffic-generation-system",
            // src_float_right: "pharmaceutical",
            title: "Traffic generation system",
            desc: ``,
            text: `Page in dev`,
          },
        ],
      },
    ],
    magento_projects: [
      {
        title: "Kukimi.de",
        icons: ["magento", "ms_azure", "zabix"],
        src: [
          {
            paragraph: 1,
            image: "kukimi",
            float: "left",
            position: "beforebegin",
          },
        ],
        text: `
        <p>
        <a href="" target="_blank">Kukimi</a> is an online store/consulting service which allows its clients to manage their dietary health needs by assisting them in planning balanced meals and thereby optimising their diets.
        </p>
        <p>
        It is the best example we have that demonstrates our experience in working with Magento based stores that are able to handle extremely high traffic. In peak loading time, directly after certain TV spots, Kukimi manages approximately 20.000 visitors and about 3000 purchases per hour.
        </p>
        <p>
        Kukimi is hosted on the MS Azure cloud service which consists of 10 servers working in a cluster (4 app servers, 3 DB servers, 1 storage service for keeping media, data and logs, 1 staging server for the development and 1 server for beta testing of the most recent features). The app servers are tuned for the Azure load balancer, which allows us to evenly distribute the loading between all app servers , and in case of the failure of any one of the app servers, the project will still continue to serve all the visitors.
        </p>
        <p>
        A DB cluster supports Master-Master data replication that is based on Percona and Galera, which allows us to accelerate data manipulation in far less time. A data mover is always a safe option, and in case of any DB server corruption, the project will continue working safely.
        </p>
        <p>
        Such a significant and equally important project such as Kukimi, requires constant support and monitoring. Beside server monitoring provided by MS Azure, we also use a Zabbix server monitoring tool that notifies us of any failures on the servers , so therefore we are constantly being notified about any potential issues, which allows us to be far quicker when needing to solve problems in a hurry.
        </p>
        <p> Kukimi has many custom features such as:</p>
        <ul class="row">
        <div class="column">
          <li>
            Magento Products being presented as a program that contains a
            list of meals and these meals are listed for only a specific
            period of time. Kukimi consults with, and helps their consumers
            to take an optimal menu, to see it online, to make changes to
            the menu and then to get a product with detailed instructions
            how to cook and to use the purchased product.
          </li>
          <li>
            Kukimi uses a custom CRM to manage their clients and products,
            which is synced with the Magento based store.
          </li>
          <li>
            There are various custom reports that allow Kukimi to foresee
            users’ demands for specific products.
          </li>
        </div>
        <div class="column">
          <li>
            There is a flexible delivery system that a user may choose. The
            user may receive an entire purchase immediately, or order
            products on a daily or weekly basis, as well as having the
            option to pay for their purchase/s in installments.
          </li>
          <li>
            The site is presented as a responsive design which allows
            clients to use the powerful and unique Kukimi service on their
            mobile devices and computers.
          </li>
        </div>
      </ul>
        `,
      },
      {
        title: "Clinic Supplies Canada",
        icons: ["magento"],
        src: [
          {
            paragraph: 1,
            image: "csc_logo",
            float: "left",
            position: "beforebegin",
            max_width: "150px",
          },
          {
            paragraph: 1,
            image: "csc",
            position: "afterend",
          },
        ],
        text: `
        <p>
        <a
          href="https://www.orthocanada.com/en/csc-migration"
          target="_blank"
          >Clinicsuppliescanada.com </a
        >(CSC) is a leader amongst suppliers for medical clinics. It
        collaborates with more than 1000 clinicians. CSC also sells
        everything related to medical equipment ensuring that their
        customers have the biggest variety of brands and products to choose
        from in Canada. CSC’s online business was founded in 2006 , but they
        only requested our support from early 2014. We optimized and
        redesigned their site significantly to make it quicker for browsing
        the thousands of products that they have to offer. We also developed
        the following features:
      </p>
      <ul class="row">
      <div class="column">
        <li>
          A user doesn’t have to browse through many categories looking
          for a specific product. We developed a unique “Shop by Injury”
          feature. All the user has to do is to specify the injury that he
          has and to select answers for 3 easy questions. The relevant
          products for their ailments will be instantly displayed for them
          to browse through.
        </li>
        <li>
          To make the purchasing process easier for buyers, we modified
          the Magento checkout functionality to let it to work in a “One
          Page Checkout” style, which allows the users to complete a
          purchase in just a few clicks - functioning with all the order
          information displayed on the same page.
        </li>
        <li>
          CSC adds many products on the same day the products have been
          requested by buyers. A custom feature allows the customers to
          request products via a wishlist. The users are also able to
          request updates for products which are out of stock.
        </li>
        <li>
          To simplify the work of CSC managers, we implemented a smart
          orders management system which allows CSC admins to see all the
          orders’ information displayed on the same page, as well as
          enabling them to process and manage the orders in a far more
          time efficient manner.
        </li>
      </div>
      <div class="column">
        <li>
          Once a CSC manager has confirmed the order, an integrated ERP
          service receives all the information regarding the order, which
          helps him to keep track of their statuses.
        </li>
        <li>
          CSC used an amazing Advanced Report extension that allowed them
          to make orders reporting by various criteria. The extension was
          unfortunately not able to manage exporting such a long list of
          orders… and CSC has quite an extensive list. We modified the
          extension, updating it with many new custom reports. Moreover,
          we allowed it to generate reports of unlimited export file size,
          which were generated in background mode. Once exporting was
          complete, the admin received an email with a link to download
          the recently generated file.
        </li>
        <li>
          CSC has over 70 various extensions installed , but unfortunately
          there were many conflicts between the extensions, therefore most
          of the extensions were modified and optimized by us, so that
          they would stop contradicting each other.
        </li>
      </div>
    </ul>
        `,
      },
      {
        title: "QGAirsoft",
        icons: ["magento"],
        src: [
          {
            paragraph: 1,
            image: "qg",
            float: "left",
            position: "beforebegin",
            max_width: "150px",
          },
          {
            paragraph: 1,
            image: "oscommers",
            float: "right",
            position: "beforebegin",
            max_width: "200px",
          },
          {
            paragraph: 2,
            image: "qg2",
            float: "left",
            position: "beforebegin",
          },
        ],
        text: ` <p>
        <a href="https://qgairsoft.com.br" target="_blank"
          >Qgairsoft.com.br</a
        >
        is one of the best examples to demonstrate how deep our knowledge of
        Magento architecture actually runs. Initially the store was built on
        OSCommerce, but due to an assortment of augmentations and various of
        the client’s requirements, it was necessary to migrate the site from
        OSCommerce to Magento. Initially another team managed the migration,
        however the new Magento version had not been polished for quite a
        while, which eventually forced the client turn to us, requesting a
        more streamlined version. Unfortunately, the site’s architecture had
        not been well considered and there were so many problems with their
        Magento implementation, that we decided to rebuild their system for
        them - from the ground up, which included many new features,
        including the few mentioned below:
      </p>
      <ul>
        <li>
          We developed a migration script to export data from OSCommerce to
          Magento.
        </li>
        <li>
          We extended Magento’s cache and improved the default cache
          accelerator.
        </li>
        <li>
          We designed and implemented a new theme for both mobile and
          desktop versions of the site.
        </li>
        <li>
          There were about 170 various extensions set on OSCommerce. We
          found all the relevant extensions for Magento and updated them to
          completely replicate the common functionality of the OSCommerce
          version.
        </li>
      </ul>
      <p>Now we have:</p>
      <ul style="list-style-type: circle">
      <li>
        One step checkout with awesome Ajax effects that allows the user
        to add items quickly and improves the checkout pages appearance.
      </li>
      <li>
        Flexible discounts logic that allows the admin to configure
        discounts swiftly and allow the final user to see discounts
        directly on the products page.
      </li>
      <li>
        Advanced referral logic that allows the admin to set up referrals
        in their own preferred manner eg. buying X product X from Y
        category and receiving a payment of $Z, as well as the ability to
        set a number of rules for different kinds of users, to let them
        receive a referral fee. Bonuses can also be obtained by both the
        referred user and the user who invited them.
      </li>
      <li>
        Advanced SEO logic: We developed a module which automatically
        sorts through the contents of the pages and makes them SEO
        friendly. The module automatically adds SEO tags to all pages, it
        adds links and optimizes the structure of the HTML code for search
        engines.
      </li>
      <li>
        Advanced ERP functionality: Stores, remainders of products, smart
        alerts, notifications rules, errors tracking on stores, etc.
      </li>
      <li>
        The Sphynx based search works pretty quickly without significantly
        overloading the server.
      </li>
      <li>
        Wide abilities for the admin to customize various views of the
        site:
        <ul style="list-style-type: '▸ '">
          <li>
            Fully customizable main menu and submenu view, admins don’t
            need to be technical to change the look of the sub-menu.
          </li>
          <li>
            The customizable products’ list page view includes
            customizable filters for different products’ categories.
          </li>
          <li>
            Admin doesn’t have to be technical to customize products page
            enabling or disabling and customizing any structural content.
          </li>
        </ul>
      </li>
    </ul>`,
      },
      {
        title: "Citrix Synergy",
        icons: ["adobe"],
        src: [
          {
            paragraph: 1,
            image: "citrixsynergy",
            float: "right",
            position: "beforebegin",
          },
          {
            paragraph: 4,
            image: "citrix_logo",
            float: "left",
            position: "beforebegin",
            max_width: "100px",
          },
        ],
        text: `  <p>
        For the events announcement site at Citrix, we developed a flexible
        CMS which allows administrators of the site to manage content
        quickly with the help of many other admins, all with different
        privilegies levels. Non-technical site administrators are able to
        change the site’s skin using CMS without involving any technical
        specialists.
      </p>
      <p>
        The site provides the users with real time text translation and the
        ability to chat during live streams.
      </p>
      <p>
        Citrix’s policy was to move all internal projects to Adobe CQ
        platform , since their management team had become accustomed to the
        old CMS, therefore we transmitted the existing CMS and its key
        management issues to Adobe CQ, as requested.
      </p>
      <p>
            Citrix organizes several conferences per year; always announcing
            them on the site , therefore it is vitally important to have the
            site up and running during these conferences - and due to these
            factors, our dedicated for Citrix team provides 24x7 support during
            the conferences.
          </p>
          <p>
            The project is alive at
            <a href="http://citrixsynergy.com" target="_blank"
              >http://citrixsynergy.com</a
            >.
          </p>`,
      },
    ],
    magento_feedbacks: [
      {
        id: 1,
        name: "Vitali Fosnyuk",
        profession: "CEO, Vivo Wholesale Inc.",
        content: `"We have been working with WDevs for just a year and plan to work with them for many more. They offer excellent service, provide fantastic support and are always updating our system.   The team at WDevs always make sure that everything runs very smoothly and they have made sure our business' needs have been met. They have helped us with any and all issues we have had with Magento in a very timely manor. We are extremely happy with their services and highly recommend them."`,
        company: "Vivo Wholesale Inc.",
        address: "3775 W. Teco Ave Ste 6, Las Vegas,NV 89118",
        phone: "+1 (702) 551 0011",
        linkSite: `<a href="https://vapewholesaleusa.com/" target="_blank">vapewholesaleusa.com</a>`,
        email: `info@vivowholesale.com`,
      },
      {
        id: 2,
        name: "Jim Gilbert",
        profession: "Founder",
        content: `"We closely cooperate with <a href="https://moogento.com/ target="_blank">Moogento.com</a>, providing services of Magento 2 extension development and services of clients support.`,
        linkSite: `<a href="https://moogento.com/" target="_blank">moogento.com</a>`,
        email: `splitlife@gmail.com`,
      },
      {
        id: 3,
        name: "Dominik Meier",
        profession: "Co-Founder",
        content: `"We at <a href="https://zakwatch.ch" target="_blank">zakwatch.ch</a> can only deliver an outstanding e-commerce shopping experience to our customers if a reliable, responsive and up-to-date development partner is at our side. We're sincerely happy to have WDevs at our side!"`,
        linkSite: `<a href="https://zakwatch.ch" target="_blank">zakwatch.ch</a>`,
        phone: " +4 (141) 511 2990, +4 (179) 238 4260",
        email: `dominik.meier@allaleen.com`,
      },
      {
        id: 4,
        name: "Sharon Chang",
        profession: `General Manager`,
        content: `General Manager of <a href="https://clinicsuppliescanada.com" target="_blank">clinicsuppliescanada.com</a> business, the website is based on Magento e-commerce engine.
        "At very beginning, our work with Andrey, Igor and his team at Webdevs aimed to just customize one of our purchased extension, we were thrilled with the result. 6 months later Webdevs is our only web development partner. Andrey and Igor's team are like superheros solving our never ending website development challenges and help us build our dream site that aligned with our corporate strategic plan. What we appreciated most about working with Andrey and his team was their ability to respond to our inquiries, keep everyone informed, and deliver the expected results. Their outstanding customer service has made our partnership one of the best!"`,
        linkSite: `<a href="https://clinicsuppliescanada.com" target="_blank">clinicsuppliescanada.com</a>`,
        phone: "+1 (877) 855 8818",
        email: `sharon@clinicsuppliescanada.com`,
      },
      {
        id: 5,
        name: "Timm Langhorst",
        profession: "CTO",
        content:
          "Magento project which is over an year under our support and development. The server is based on MS Azure. The project is oriented to have over 50K of active visitors. The client has a lot of TV spots, in time of which the peak load happens.",
        linkSite: `<a href="https://kukimi.de/" target="_blank">kukimi.de</a>`,
        email: `timm.langhorst@kukimi.de`,
      },
      {
        id: 6,
        name: "James",
        profession:
          "CTO,Instagopher— Grocery and liquor stores in Nassau Bahamas",
        content: `"We’ve had the pleasure to work with WDevs for the last 8 months and have had an exceptional experience. The work we requested has  always been completed on time and their communication has been nothing short of great. WDevs have worked along side our current developer and solved all of the issues that we faced. I would recommend WDevs to anyone that needed frontend or backend website development work they know their stuff. WDevs has never been unable to solve any of the customizations request that we made. I can’t thank them enough for their time and work I thought about changing to another platform, but I didn’t have to thanks WDevs. We would never think of using another company and look forward to working with WDevs in the future."`,
        linkSite: `<a href="https://www.instagopher.com/" target="_blank">www.instagopher.com</a>`,
        phone: "242 809 7312",
        email: `james@instagopher.com`,
      },
      {
        id: 7,
        name: "Shaun Casey",
        profession: "CEO",
        content: `"We have been working with WDEVS for over a year. They have worked alongside our current developers without fault and offered help and support when required. They have been involved in a number of projects with us and have helped us develop, integrate and customise Magento 2 plug-ins. I would have no hesitation in recommending this company."`,
        linkSite: `<a href="https://www.livewelltoday.co.uk" target="_blank">www.livewelltoday.co.uk</a>`,
        email: `shaun@livewelltoday.co.uk`,
      },
      {
        id: 8,
        name: "Paulo Caetano",
        profession: "CTO, QG Airsoft ",
        content: `"I'd like to thank WDevs team. This is by far one of the best developer teams I have worked with. Their support is really amazing. The manager is always online on Skype so if any problem appears we contact him in real time and he arranges a way to fix it. Also the quality of the solutions presented is very high and they truly know how to work with Magento. It's been a pleasure and I recommend them for sure."`,
      },
      {
        id: 9,
        name: "Maxim Van Broeck",
        profession: "CEO",
        content: `"Working with Wdevs is working with professionals. We had some Magento issues and wanted to change our store frontend. Wdevs has helped us in any possible way and understood straight away what our plan was. For any frontend or backend Magento change i would recommend Wdevs."`,
        linkSite: `<a href="http://belomax.be" target="_blank">belomax.be</a>`,
      },
      {
        id: 10,
        name: "Elliot Paynter",
        profession: "Director",
        content: `"We’ve been working with WDevs on a complex e-commerce ERP integration project and what I’m impressed with is not only are they technically very competent but also excellent project managers and also proactive. This really helps me to keep the project moving forward."`,
        linkSite: `<a href="https://www.ignitioncbs.co.uk/" target="_blank">www.ignitioncbs.co.uk/</a>`,
        email: "elliot@ignitioncbs.co.uk",
      },
      {
        id: 11,
        name: "C. R. Lefort",
        profession: "Technical Manager, Legends MKT",
        content: `"
            We have worked with WDEVS for 6 months to manage, migrate and upgrade our busy ecommerce platform based on Magento 2.

            Our WDevs team who consist of a project manager, front-end and backend developer, DevOps engineer and QA specialist have enabled us to successfully upgrade our ecommerce platform, stabilize and secure our  infrastructure, implement a much needed CI/CD source control framework with Docker containers, and migrate our servers to 2.4.3.

            The team has consistently shown dedication, technical expertise, a high degree of dependability and a great capacity for problem solving. Most importantly their expertise in Magento has enabled us to grow our platform and prevent critical downtime.

            We were very impressed with the quality of the reporting WDEVS provided and their ability to coordinate their team efforts when solving problems under pressure while being very transparent.

            Documentation and communication in English has been very satisfactory and in every aspects the team has exceeded our expectations.

            We have been able to give them full access to our infrastructure and fully trust them with security, and we are now pleased to have the team alongside us to grow our platform and support us through future evolutions.

            Magento is a complex architecture and a very demanding ecommerce platform that requires a mix of technical skills that are hard to find. The quality of the work done by WDEVS and their dependability are second to none. We are most grateful to have them on board.
          "
        `,
        company: "Legends MKT",
        address: "Playa del Carmen, QROO Mexico",
        email: "claude@legendsmkt.com ",
      },
    ],
  },
});
