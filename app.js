// ============ Business config ============
const WHATSAPP_NUMBER = '919769620994';
const BUSINESS_NAME = 'जयमंगल Sweets & Snacks';
const INSTAGRAM_URL = 'https://www.instagram.com/jaymangalsnacksandsweets?igsh=ZnlsNDg4cjZ1ZWJo&utm_source=qr';
const LANG_KEY = 'jaymangal-lang';
const SUPPORTED_LANGS = ['en', 'hi', 'mr'];

// ============ UI text translations ============
const I18N = {
  en: {
    nav_about: 'Our Story', nav_menu: 'Menu', nav_gallery: 'Gallery', nav_reviews: 'Reviews', nav_order: 'Order',
    nav_cta: 'Order on WhatsApp',
    nav_instagram: 'Follow us on Instagram',
    instagram_qr_title: 'Prefer Instagram?',
    instagram_qr_body: 'Scan to follow @jaymangalsnacksandsweets — see new items, festive specials, and behind-the-scenes.',
    hero_eyebrow: '🪔 Homemade with love, in Mumbai',
    hero_title1: 'Sweets & snacks made the way',
    hero_title2: 'your family remembers',
    hero_sub: 'Ladoos, chaklis, karanjis, puran poli and more — prepared fresh to order, with 100% organic, pure ingredients. Every single item is made using only 100% pure desi ghee and cold-pressed sunflower oil. We never use palm oil, vanaspati, or any local refined oils — because your family deserves nothing less. Made to be shared with the people you love.',
    trust_ghee: 'Pure ghee & sunflower oil — no palm oil',
    hero_cta_menu: 'See full menu & prices',
    trust_organic: '100% Organic ingredients',
    trust_fresh: 'Made fresh to order',
    trust_delivery: 'Delivered across Mumbai',
    hero_photo_tag: 'Freshly made, this week 🌟',
    about_eyebrow: 'Our Story',
    about_heading: 'A kitchen that started with one dream',
    about_p1: "Every good sweet starts with someone who refuses to cut corners — and that's exactly where जयमंगल Sweets & Snacks began. Sou. Madhuri Maruti Nar has spent years perfecting recipes passed down in her family: the right roast on the besan for a laddu, the patience a puran poli needs before it puffs up just right on the tawa, the exact hand-ground bhajani that makes a chakli snap instead of crumble.",
    about_p2: "For a long time, this was just for family — the ladoos that disappeared within a day of any festival, the puran poli everyone asked for by name. जयमंगल Sweets & Snacks is that same kitchen, now open to your family too. One thing has never changed: every item is made exclusively with 100% pure desi ghee and sunflower oil. No palm oil. No vanaspati. No shortcuts — because the taste of real ghee is something no substitute can replicate.",
    about_p3: "Every order is still made in small batches, by hand, the same way it always has been — because that's the only way Sou. Madhuri Maruti Nar knows how to cook.",
    menu_eyebrow: 'Menu & Prices',
    menu_heading: "What's cooking today",
    menu_sub: 'Tap "Order this" on anything below to send a WhatsApp message with the item already filled in — just confirm quantity and delivery date.',
    menu_order_btn: 'Order this →',
    menu_seasonal_title: 'Festive & seasonal specials',
    menu_seasonal_body: 'Karanjis and other festival items (Diwali, Ganesh Chaturthi, and more) are available seasonally — message us on WhatsApp for current availability and pricing.',
    gallery_eyebrow: 'Gallery',
    gallery_heading: 'Straight from the kitchen',
    gallery_caption1: 'Fresh batch, packed and ready',
    gallery_caption2: 'Puran poli, straight off the tawa',
    gallery_caption3: 'Made fresh, in small batches',
    gallery_caption_chivda: 'Poha chivda, fresh off the stove',
    gallery_caption_chakli: 'Crispy, hand-pressed chakli',
    gallery_caption_modak: 'Steamed modak, festival-ready',
    gallery_caption_ghavane: 'Ghavane, made from our flour mix',
    gallery_caption_besan: 'Besan laddu, freshly rolled',
    gallery_caption_packaging: 'Labeled and dated, every batch',
    reviews_eyebrow: 'From Our Customers',
    reviews_heading: 'What families are saying',
    review1_translation: '(The puran poli your mother made was excellent! Please tell her thank you.)',
    review1_author: 'From a WhatsApp customer',
    review2_text: 'Everything tastes homemade in the best way — you can tell nothing is store-bought.',
    review2_author: 'A happy customer',
    order_eyebrow: 'How to Order',
    order_heading: 'Order for your family, or as a gift',
    order_step1: 'Browse the menu and pick your items',
    order_step2: 'Message us on WhatsApp or fill in the form — let us know quantity and date',
    order_step3: 'Please order at least 2–3 days in advance so everything is made fresh',
    order_step4: 'We prepare your order by hand and deliver anywhere in Mumbai',
    order_delivery_note: '📍 <strong>Delivery:</strong> Anywhere in Mumbai · 🗓️ <strong>Lead time:</strong> 2–3 days advance notice · ✅ Daily and festive/seasonal orders both welcome',
    order_cta_message: 'Message us directly',
    order_form_heading: 'Or send an enquiry',
    order_form_note: 'This opens WhatsApp with your details filled in, so your message reaches us right away.',
    label_name: 'Your name', label_phone: 'Phone number', label_items: "Item(s) you'd like",
    items_placeholder: 'e.g. 1kg Besan Laddu, 10 Puranpoli',
    label_date: 'Preferred delivery date', label_message: 'Anything else?',
    message_placeholder: 'Delivery address, occasion, special requests…',
    submit_btn: 'Send enquiry via WhatsApp',
    footer_tagline: 'Made with 100% pure desi ghee & sunflower oil — no palm oil, no shortcuts. Just honest, homemade goodness, delivered with love.',
    footer_delivering: 'Delivering across Mumbai',
    footer_bottom_made: 'Made with 🧡 for family recipes',
    toast_enquiry_opening: 'Opening WhatsApp with your enquiry…',
    toast_fill_required: 'Please enter your name and phone number.',
    unit_kg: '/ kg', unit_piece: '/ piece',
    wa_generic: `Hi ${BUSINESS_NAME}, I'd like to place an order. Could you help me with the menu and delivery details?`,
    all_categories: 'All'
  },
  hi: {
    nav_about: 'हमारी कहानी', nav_menu: 'मेन्यू', nav_gallery: 'गैलरी', nav_reviews: 'समीक्षाएं', nav_order: 'ऑर्डर करें',
    nav_cta: 'व्हाट्सएप पर ऑर्डर करें',
    nav_instagram: 'इंस्टाग्राम पर फॉलो करें',
    instagram_qr_title: 'इंस्टाग्राम पसंद है?',
    instagram_qr_body: 'स्कैन करें और @jaymangalsnacksandsweets को फॉलो करें — नए आइटम, त्योहारी खास और पीछे की झलकियां देखें।',
    hero_eyebrow: '🪔 मुंबई में प्यार से बना घर का खाना',
    hero_title1: 'मिठाई और नाश्ता, बिल्कुल वैसे ही',
    hero_title2: 'जैसे आपका परिवार याद रखता है',
    hero_sub: 'लड्डू, चकली, करंजी, पुरनपोली और भी बहुत कुछ — 100% ऑर्गेनिक सामग्री से, ऑर्डर पर ताज़ा बनाया जाता है। हर हर सामग्री केवल 100% शुद्ध देसी घी और सूरजमुखी तेल से बनती है — पाम ऑयल, वनस्पति या कोई भी रिफाइंड तेल नहीं। आपके परिवार को सिर्फ सर्वश्रेष्ठ ही मिलना चाहिए।',
    trust_ghee: 'शुद्ध घी और सूरजमुखी तेल — पाम ऑयल नहीं',
    hero_cta_menu: 'पूरा मेन्यू और कीमतें देखें',
    trust_organic: '100% ऑर्गेनिक सामग्री',
    trust_fresh: 'ऑर्डर पर ताज़ा बनाया जाता है',
    trust_delivery: 'पूरे मुंबई में डिलीवरी',
    hero_photo_tag: 'इस हफ्ते की ताज़ी बनी 🌟',
    about_eyebrow: 'हमारी कहानी',
    about_heading: 'एक रसोई, जिसकी शुरुआत एक सपने से हुई',
    about_p1: 'हर अच्छी मिठाई की शुरुआत उस इंसान से होती है जो कभी शॉर्टकट नहीं अपनाता — और जयमंगल Sweets & Snacks की शुरुआत भी ठीक इसी तरह हुई। सौ. माधुरी मारुती नर ने वर्षों तक अपने परिवार से मिली रेसिपीज़ को संजोया है — लड्डू के लिए बेसन को सही तरीके से भूनना, पुरनपोली को तवे पर फूलने से पहले जितना धैर्य चाहिए उतना रखना, और चकली को कुरकुरा बनाने वाली हाथ से पिसी भाजणी।',
    about_p2: 'लंबे समय तक यह सिर्फ परिवार के लिए ही था — वो लड्डू जो त्योहार में एक दिन में खत्म हो जाते, और वो पुरनपोली जिसे हर कोई नाम लेकर मांगता था। अब यह रसोई आपके घर के लिए भी खुली है। एक बात आज भी नहीं बदली — हर चीज़ केवल 100% शुद्ध देसी घी और सूरजमुखी तेल से बनती है। ना पाम ऑयल, ना वनस्पति, ना कोई स्थानीय रिफाइंड तेल — क्योंकि शुद्ध घी की खुशबू कोई नकल नहीं दे सकता।',
    about_p3: 'आज भी हर ऑर्डर छोटी मात्रा में, हाथ से और उसी तरीके से बनाई जाती है — क्योंकि सौ. माधुरी मारुती नर को खाना बनाने का बस यही एक तरीका आता है।',
    menu_eyebrow: 'मेन्यू और कीमतें',
    menu_heading: 'आज क्या बन रहा है',
    menu_sub: 'नीचे किसी भी चीज़ पर "यह ऑर्डर करें" दबाएं और व्हाट्सएप पर वह आइटम पहले से भरा हुआ संदेश भेजें — बस मात्रा और डिलीवरी की तारीख बताएं।',
    menu_order_btn: 'यह ऑर्डर करें →',
    menu_seasonal_title: 'त्योहारी और सीज़नल खास पकवान',
    menu_seasonal_body: 'करंजी और अन्य त्योहारी पकवान (दिवाली, गणेश चतुर्थी आदि) सीज़न के अनुसार उपलब्ध होते हैं — मौजूदा उपलब्धता और कीमत जानने के लिए व्हाट्सएप पर संपर्क करें।',
    gallery_eyebrow: 'गैलरी',
    gallery_heading: 'सीधे रसोई से',
    gallery_caption1: 'ताज़ा बैच, पैक होकर तैयार',
    gallery_caption2: 'पुरनपोली, तवे से सीधे',
    gallery_caption3: 'ताज़ा, छोटी मात्रा में बनाया गया',
    gallery_caption_chivda: 'पोहा चिवड़ा, गैस से सीधे',
    gallery_caption_chakli: 'कुरकुरी, हाथ से बनाई चकली',
    gallery_caption_modak: 'भाप में पका मोदक, त्योहारों के लिए तैयार',
    gallery_caption_ghavane: 'घावन, हमारे आटे से बना',
    gallery_caption_besan: 'बेसन लड्डू, ताज़ा बेला हुआ',
    gallery_caption_packaging: 'हर बैच लेबल और तारीख के साथ',
    reviews_eyebrow: 'हमारे ग्राहकों से',
    reviews_heading: 'परिवार क्या कह रहे हैं',
    review1_translation: null,
    review1_author: 'एक व्हाट्सएप ग्राहक की ओर से',
    review2_text: 'सब कुछ बिल्कुल घर के बने जैसा लगता है — साफ पता चलता है कि कुछ भी बाज़ार का नहीं है।',
    review2_author: 'एक खुश ग्राहक',
    order_eyebrow: 'ऑर्डर कैसे करें',
    order_heading: 'अपने परिवार के लिए ऑर्डर करें, या तोहफे के रूप में',
    order_step1: 'मेन्यू देखें और अपनी पसंद के आइटम चुनें',
    order_step2: 'व्हाट्सएप पर संदेश भेजें या फॉर्म भरें — मात्रा और तारीख बताएं',
    order_step3: 'कृपया कम से कम 2–3 दिन पहले ऑर्डर करें ताकि सब कुछ ताज़ा बनाया जा सके',
    order_step4: 'हम आपका ऑर्डर हाथ से तैयार करते हैं और मुंबई में कहीं भी डिलीवर करते हैं',
    order_delivery_note: '📍 <strong>डिलीवरी:</strong> मुंबई में कहीं भी · 🗓️ <strong>समय:</strong> 2–3 दिन पहले सूचना दें · ✅ रोज़ाना और त्योहारी/सीज़नल दोनों ऑर्डर स्वीकार्य',
    order_cta_message: 'सीधे हमें संदेश भेजें',
    order_form_heading: 'या पूछताछ भेजें',
    order_form_note: 'यह आपकी जानकारी भरकर व्हाट्सएप खोलता है, ताकि आपका संदेश हम तक तुरंत पहुंचे।',
    label_name: 'आपका नाम', label_phone: 'फ़ोन नंबर', label_items: 'आपको चाहिए वो आइटम',
    items_placeholder: 'जैसे: 1 किलो बेसन लड्डू, 10 पुरनपोली',
    label_date: 'पसंदीदा डिलीवरी तारीख', label_message: 'कुछ और बताना है?',
    message_placeholder: 'डिलीवरी पता, अवसर, खास मांग…',
    submit_btn: 'व्हाट्सएप के ज़रिए पूछताछ भेजें',
    footer_tagline: 'शुद्ध देसी घी और सूरजमुखी तेल से बनाया गया — ना पाम ऑयल, ना वनस्पति। सिर्फ सच्चा, घरेलू स्वाद, प्यार से बनाया राखा।',
    footer_delivering: 'पूरे मुंबई में डिलीवरी',
    footer_bottom_made: 'पारिवारिक व्यंजनों के लिए 🧡 से बनाया गया',
    toast_enquiry_opening: 'आपकी पूछताछ के साथ व्हाट्सएप खोला जा रहा है…',
    toast_fill_required: 'कृपया अपना नाम और फ़ोन नंबर दर्ज करें।',
    unit_kg: '/ किलो', unit_piece: '/ नग',
    wa_generic: `नमस्ते ${BUSINESS_NAME}, मुझे ऑर्डर करना है। क्या आप मुझे मेन्यू और डिलीवरी की जानकारी दे सकते हैं?`,
    all_categories: 'सभी'
  },
  mr: {
    nav_about: 'आमची गोष्ट', nav_menu: 'मेनू', nav_gallery: 'गॅलरी', nav_reviews: 'अभिप्राय', nav_order: 'ऑर्डर करा',
    nav_cta: 'व्हॉट्सअॅपवर ऑर्डर करा',
    nav_instagram: 'इंस्टाग्रामवर फॉलो करा',
    instagram_qr_title: 'इंस्टाग्राम आवडतं?',
    instagram_qr_body: 'स्कॅन करा आणि @jaymangalsnacksandsweets ला फॉलो करा — नवीन पदार्थ, सणासुदीचे खास आणि मागच्या बाजूची झलक पाहा.',
    hero_eyebrow: '🪔 मुंबईत प्रेमाने बनवलेलं घरगुती खाणं',
    hero_title1: 'गोडधोड आणि खाऊ, अगदी तसाच',
    hero_title2: 'जसा तुमच्या घरचा आठवतो',
    hero_sub: 'लाडू, चकली, करंजी, पुरणपोळी आणि बरंच काही — १००% सेंद्रिय आणि शुद्ध पदार्थांपासून, ऑर्डरप्रमाणे ताजं बनवलं जातं. प्रत्येक पदार्थ फक्त १००% शुद्ध तूप आणि सूर्यफूल तेलात बनवला जातो — पाम ऑईल, वनस्पती किंवा कोणतेही स्थानिक तेल वापरले जात नाही। तुमच्या प्रिय माणसांसोबत वाटण्यासाठी.',
    trust_ghee: 'शुद्ध तूप आणि सूर्यफूल तेल — पाम ऑईल नाही',
    hero_cta_menu: 'संपूर्ण मेनू आणि किंमती पहा',
    trust_organic: '१००% सेंद्रिय पदार्थ',
    trust_fresh: 'ऑर्डरप्रमाणे ताजं बनवलं जातं',
    trust_delivery: 'संपूर्ण मुंबईत डिलिव्हरी',
    hero_photo_tag: 'याच आठवड्यातील ताजं 🌟',
    about_eyebrow: 'आमची गोष्ट',
    about_heading: 'एका स्वप्नापासून सुरू झालेलं स्वयंपाकघर',
    about_p1: 'प्रत्येक चांगल्या गोडाची सुरुवात अशा व्यक्तीपासून होते जी कधीच तडजोड करत नाही — आणि जयमंगल Sweets & Snacks ची सुरुवात नेमकी अशीच झाली. सौ. माधुरी मारुती नर यांनी आपल्या घरातून आलेल्या पाककृती वर्षानुवर्षे जपल्या आहेत — लाडवासाठी बेसन नेमकं किती भाजायचं, पुरणपोळी तव्यावर फुगण्याआधी किती धीर धरायचा, आणि चकली तुटण्याऐवजी कडकडीत होण्यासाठी हाताने दळलेली भाजणी नेमकी कशी हवी.',
    about_p2: 'बऱ्याच काळापर्यंत हे फक्त घरच्यांसाठीच होतं — सणासुदीला एका दिवसात संपणारे लाडू, आणि सगळे आवर्जून नावाने मागायचे ती पुरणपोळी. आता हे स्वयंपाकघर तुमच्यासाठीही खुलं आहे. एक गोष्ट मात्र कधीच बदलली नाही — प्रत्येक पदार्थ फक्त १००% शुद्ध तूप आणि सूर्यफूल तेलात बनवला जातो. पाम ऑईल नाही, वनस्पती नाही, कोणतेही स्थानिक तेल नाही — कारण शुद्ध तूपाची सुगंध कोणतीही भेसळ देऊ शकत नाही.',
    about_p3: 'आजही प्रत्येक ऑर्डर लहान प्रमाणात, हाताने आणि तशाच पद्धतीने बनवली जाते — कारण सौ. माधुरी मारुती नर यांना स्वयंपाक करायचा हाच एकमेव मार्ग माहीत आहे.',
    menu_eyebrow: 'मेनू आणि किंमती',
    menu_heading: 'आज काय बनतंय',
    menu_sub: 'खालील कोणत्याही पदार्थावर "हे ऑर्डर करा" दाबा आणि तो पदार्थ आधीच भरलेला व्हॉट्सअॅप मेसेज पाठवा — फक्त प्रमाण आणि डिलिव्हरीची तारीख सांगा.',
    menu_order_btn: 'हे ऑर्डर करा →',
    menu_seasonal_title: 'सणासुदीचे खास पदार्थ',
    menu_seasonal_body: 'करंजी आणि इतर सणासुदीचे पदार्थ (दिवाळी, गणेश चतुर्थी इ.) हंगामानुसार उपलब्ध असतात — सध्याची उपलब्धता आणि किंमतीसाठी व्हॉट्सअॅपवर संपर्क करा.',
    gallery_eyebrow: 'गॅलरी',
    gallery_heading: 'थेट स्वयंपाकघरातून',
    gallery_caption1: 'ताजी बॅच, पॅक करून तयार',
    gallery_caption2: 'पुरणपोळी, तव्यावरून थेट',
    gallery_caption3: 'ताजं, कमी प्रमाणात बनवलेलं',
    gallery_caption_chivda: 'पोहे चिवडा, गॅसवरून थेट',
    gallery_caption_chakli: 'कुरकुरीत, हाताने बनवलेली चकली',
    gallery_caption_modak: 'वाफवलेले मोदक, सणासाठी तयार',
    gallery_caption_ghavane: 'घावणे, आमच्या पिठापासून बनवलेले',
    gallery_caption_besan: 'बेसन लाडू, ताजे वळलेले',
    gallery_caption_packaging: 'प्रत्येक बॅच लेबल आणि तारखेसह',
    reviews_eyebrow: 'आमच्या ग्राहकांकडून',
    reviews_heading: 'कुटुंबं काय म्हणतात',
    review1_translation: '(तुझ्या आईने बनवलेली पुरणपोळी खूप छान होती! तिला थँक यू सांग.)',
    review1_author: 'एका व्हॉट्सअॅप ग्राहकाकडून',
    review2_text: 'सगळं अगदी घरगुती चवीचं वाटतं — काहीच बाजारातलं नाही हे स्पष्ट जाणवतं.',
    review2_author: 'एक समाधानी ग्राहक',
    order_eyebrow: 'ऑर्डर कशी करावी',
    order_heading: 'तुमच्या कुटुंबासाठी किंवा भेट म्हणून ऑर्डर करा',
    order_step1: 'मेनू पाहा आणि तुमचे आवडते पदार्थ निवडा',
    order_step2: 'व्हॉट्सअॅपवर मेसेज करा किंवा फॉर्म भरा — प्रमाण आणि तारीख सांगा',
    order_step3: 'कृपया किमान २-३ दिवस आधी ऑर्डर करा जेणेकरून सर्व काही ताजं बनवता येईल',
    order_step4: 'आम्ही तुमची ऑर्डर हाताने तयार करतो आणि मुंबईत कुठेही डिलिव्हर करतो',
    order_delivery_note: '📍 <strong>डिलिव्हरी:</strong> मुंबईत कुठेही · 🗓️ <strong>कालावधी:</strong> २-३ दिवस आधी कळवा · ✅ रोजची आणि सणासुदीची दोन्ही ऑर्डर स्वीकारली जाते',
    order_cta_message: 'थेट आम्हाला मेसेज करा',
    order_form_heading: 'किंवा चौकशी पाठवा',
    order_form_note: 'यामुळे तुमची माहिती भरून व्हॉट्सअॅप उघडेल, जेणेकरून तुमचा मेसेज आम्हाला लगेच पोहोचेल.',
    label_name: 'तुमचं नाव', label_phone: 'फोन नंबर', label_items: 'तुम्हाला हवे असलेले पदार्थ',
    items_placeholder: 'उदा. १ किलो बेसन लाडू, १० पुरणपोळी',
    label_date: 'हवी असलेली डिलिव्हरी तारीख', label_message: 'आणखी काही सांगायचंय?',
    message_placeholder: 'डिलिव्हरी पत्ता, प्रसंग, खास मागणी…',
    submit_btn: 'व्हॉट्सअॅपद्वारे चौकशी पाठवा',
    footer_tagline: 'शुद्ध तूप आणि सूर्यफूल तेलात बनवलेलं — पाम ऑईल नाही, वनस्पती नाही. फक्त खरं, घरगुती मनाचे, प्रेमाने तुमच्यापर्यंत पोहोचवलेलं.',
    footer_delivering: 'संपूर्ण मुंबईत डिलिव्हरी',
    footer_bottom_made: 'कौटुंबिक पाककृतींसाठी 🧡 ने बनवलेलं',
    toast_enquiry_opening: 'तुमच्या चौकशीसह व्हॉट्सअॅप उघडत आहे…',
    toast_fill_required: 'कृपया तुमचं नाव आणि फोन नंबर टाका.',
    unit_kg: '/ किलो', unit_piece: '/ नग',
    wa_generic: `नमस्कार ${BUSINESS_NAME}, मला ऑर्डर करायची आहे. मेनू आणि डिलिव्हरीची माहिती देऊ शकाल का?`,
    all_categories: 'सर्व'
  }
};

// ============ Menu data (multilingual) ============
const CATEGORY_LABELS = {
  chivda:      { en: 'Chivda & Snacks',   hi: 'चिवड़ा और नाश्ता',   mr: 'चिवडा आणि खाऊ' },
  ladoo:       { en: 'Ladoos',            hi: 'लड्डू',              mr: 'लाडू' },
  traditional: { en: 'Traditional Sweets',hi: 'पारंपरिक मिठाई',     mr: 'पारंपरिक गोडधोड' },
  flour:       { en: 'Flours & Mixes',    hi: 'आटा और मिश्रण',      mr: 'पीठ आणि मिश्रण' }
};

const MENU = [
  { cat: 'chivda', unit: 'kg', price: 400,
    name: { en: 'Poha Chivda', hi: 'पोहा चिवड़ा', mr: 'पोहे चिवडा' } },
  { cat: 'chivda', unit: 'kg', price: 400,
    name: { en: 'Kurmura Chivda', hi: 'कुरमुरा चिवड़ा', mr: 'कुरमुरे चिवडा' } },
  { cat: 'chivda', unit: 'kg', price: 500,
    name: { en: 'Chakli Bhajani', hi: 'चकली भाजणी', mr: 'चकली भाजणी' },
    note: { en: 'Ready-to-fry chakli flour mix', hi: 'तलने के लिए तैयार चकली आटा मिश्रण', mr: 'तळण्यासाठी तयार चकली भाजणी' } },
  { cat: 'chivda', unit: 'kg', price: 450,
    name: { en: 'Shankarpali', hi: 'शंकरपाली', mr: 'शंकरपाळी' } },
  { cat: 'ladoo', unit: 'kg', price: 1200,
    name: { en: 'Methi Laddu', hi: 'मेथी लड्डू', mr: 'मेथी लाडू' },
    note: { en: 'With more dry fruits', hi: 'ज़्यादा ड्राई फ्रूट्स के साथ', mr: 'जास्त ड्रायफ्रूट्ससह' } },
  { cat: 'ladoo', unit: 'kg', price: 1000,
    name: { en: 'Methi Laddu', hi: 'मेथी लड्डू', mr: 'मेथी लाडू' },
    note: { en: 'With less dry fruits', hi: 'कम ड्राई फ्रूट्स के साथ', mr: 'कमी ड्रायफ्रूट्ससह' } },
  { cat: 'ladoo', unit: 'kg', price: 750,
    name: { en: 'Besan Laddu', hi: 'बेसन लड्डू', mr: 'बेसन लाडू' } },
  { cat: 'ladoo', unit: 'kg', price: 650,
    name: { en: 'Rava Laddu', hi: 'रवा लड्डू', mr: 'रवा लाडू' } },
  { cat: 'traditional', unit: 'piece', price: 20,
    name: { en: 'Puranpoli', hi: 'पूरन पोली', mr: 'पुरणपोळी' } },
  { cat: 'traditional', unit: 'piece', price: 20,
    name: { en: 'Modak', hi: 'मोदक', mr: 'मोदक' } },
  { cat: 'flour', unit: 'kg', price: 200,
    name: { en: 'Thalipeeth Bhajani', hi: 'थालीपीठ भाजणी', mr: 'थालीपीठ भाजणी' },
    note: { en: 'Multi-grain flour mix', hi: 'मल्टीग्रेन आटा मिश्रण', mr: 'बहुधान्य पीठ मिश्रण' } },
  { cat: 'flour', unit: 'kg', price: 60,
    name: { en: 'Ghavane Atta', hi: 'घावन आटा', mr: 'घावणे पीठ' } },
  { cat: 'flour', unit: 'kg', price: 120,
    name: { en: 'Vade Atta', hi: 'वडा आटा', mr: 'वडे पीठ' } }
];

// ============ State ============
let currentLang = 'en';
let activeCategory = 'all';

function t(key) { return I18N[currentLang][key] ?? I18N.en[key] ?? key; }

// ============ WhatsApp link helper ============
function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function setDefaultWhatsappLinks() {
  const msg = t('wa_generic');
  ['headerWhatsapp', 'heroWhatsapp', 'orderWhatsapp'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = waLink(msg);
  });
}

function setInstagramLinks() {
  ['headerInstagram', 'orderInstagram', 'footerInstagram', 'mobileInstagram'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = INSTAGRAM_URL;
  });
}

// ============ Apply static translations ============
function applyStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val == null) return;
    if (val.includes('<strong>')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });
  document.getElementById('htmlRoot').setAttribute('lang', currentLang);
}

// ============ Render: menu tabs ============
function renderMenuTabs() {
  const wrap = document.getElementById('menuTabs');
  const cats = ['all', ...Object.keys(CATEGORY_LABELS)];
  wrap.innerHTML = cats.map(c => {
    const label = c === 'all' ? t('all_categories') : CATEGORY_LABELS[c][currentLang];
    return `<button class="menu-tab${c === activeCategory ? ' is-active' : ''}" data-cat="${c}">${escapeHtml(label)}</button>`;
  }).join('');
  wrap.querySelectorAll('.menu-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.cat;
      renderMenuTabs();
      renderMenuGrid();
    });
  });
}

// ============ Render: menu grid ============
function renderMenuGrid() {
  const wrap = document.getElementById('menuGrid');
  const items = activeCategory === 'all' ? MENU : MENU.filter(m => m.cat === activeCategory);
  const unitLabel = { kg: t('unit_kg'), piece: t('unit_piece') };

  wrap.innerHTML = items.map(m => {
    const name = m.name[currentLang];
    const note = m.note ? m.note[currentLang] : '';
    const priceStr = `₹${m.price} ${unitLabel[m.unit]}`;
    return `
      <div class="menu-card">
        <div class="menu-card-head">
          <p class="menu-card-name">${escapeHtml(name)}</p>
          <span class="menu-card-price">${escapeHtml(priceStr)}</span>
        </div>
        ${note ? `<p class="menu-card-note">${escapeHtml(note)}</p>` : ''}
        <button class="menu-card-order" data-name-en="${escapeHtml(m.name.en)}" data-note-en="${escapeHtml(m.note ? m.note.en : '')}" data-price="${escapeHtml(priceStr)}">${escapeHtml(t('menu_order_btn'))}</button>
      </div>
    `;
  }).join('');

  wrap.querySelectorAll('.menu-card-order').forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      const item = activeCategory === 'all' ? MENU[idx] : MENU.filter(m => m.cat === activeCategory)[idx];
      const name = item.name[currentLang];
      const note = item.note ? item.note[currentLang] : '';
      const priceStr = `₹${item.price} ${unitLabel[item.unit]}`;
      const msg = buildItemOrderMessage(name, note, priceStr);
      window.open(waLink(msg), '_blank', 'noopener');
    });
  });
}

function buildItemOrderMessage(name, note, priceStr) {
  const templates = {
    en: `Hi ${BUSINESS_NAME}, I'd like to order:\n\n${name}${note ? ' (' + note + ')' : ''} — ${priceStr}\nQuantity: \nDelivery date: \n\nCould you confirm availability?`,
    hi: `नमस्ते ${BUSINESS_NAME}, मुझे यह ऑर्डर करना है:\n\n${name}${note ? ' (' + note + ')' : ''} — ${priceStr}\nमात्रा: \nडिलीवरी तारीख: \n\nक्या आप उपलब्धता बता सकते हैं?`,
    mr: `नमस्कार ${BUSINESS_NAME}, मला हे ऑर्डर करायचं आहे:\n\n${name}${note ? ' (' + note + ')' : ''} — ${priceStr}\nप्रमाण: \nडिलिव्हरी तारीख: \n\nउपलब्धता सांगू शकाल का?`
  };
  return templates[currentLang] || templates.en;
}

// ============ Reviews ============
// `quote` is the customer's real words, shown as-written (never translated).
// `translation` is an optional gloss shown only for languages where it adds value.
const REVIEWS = [
  {
    quote: 'Hi morning 🌸 सगळे पदार्थ अप्रतिम आहे✨ चकली तर एकदम कुरकुरीत आणि टेस्टी आहे😋✨ कुरमुरे chivda सुद्धा चविष्ट बनवला आहे आईने😘 शंकर पाळी तर तोंडात टाकताच विरघळून जाते आणि चव आहे सुंदर🤤 बेसन लाडू आणि रवा लाडू सुद्धा एक number बनले आहेत👌 Overall सगळेच पदार्थ A++ आहे ना जास्त oily purely homemade with lots of love of Aai💕🌸 आणि Thank you so much tai he मोठी order होती जी फक्त 2 दिवसात ready करून दिली on time🥰🌸',
    translation: {
      en: '(Hi, good morning! Everything is amazing — the chakli is super crispy and tasty, the kurmura chivda mom made is delicious too, and the shankarpali just melts in your mouth with a wonderful taste. The besan laddu and rava laddu also turned out top-notch. Overall, everything is A++ — not too oily, purely homemade with lots of love from Mom. And thank you so much — this was a big order made ready on time within just 2 days!)',
      hi: '(नमस्ते, सुप्रभात! सब कुछ शानदार है — चकली बहुत कुरकुरी और स्वादिष्ट है, कुरमुरे चिवड़ा भी बहुत बढ़िया बना है, और शंकरपाली मुंह में घुल जाती है और स्वाद भी लाजवाब है। बेसन लड्डू और रवा लड्डू भी बेहतरीन बने हैं। कुल मिलाकर सब कुछ A++ है, ज़्यादा तेल वाला नहीं, पूरी तरह घर का बना और मां के प्यार से भरा। और बहुत-बहुत धन्यवाद — यह एक बड़ा ऑर्डर था जो सिर्फ 2 दिन में समय पर तैयार करके दिया गया!)'
    },
    author: { en: 'A repeat customer', hi: 'एक नियमित ग्राहक', mr: 'एक नियमित ग्राहक' },
    featured: true
  },
  {
    quote: 'Puranpoli bohot achi banayi hai aap ki mummy ne. Unko thank you bolna.',
    translation: {
      en: '(The puran poli your mother made was excellent! Please tell her thank you.)',
      mr: '(तुझ्या आईने बनवलेली पुरणपोळी खूप छान होती! तिला थँक यू सांग.)'
    },
    author: { en: 'From a WhatsApp customer', hi: 'एक व्हाट्सएप ग्राहक की ओर से', mr: 'एका व्हॉट्सअॅप ग्राहकाकडून' }
  },
  {
    quote: 'मोदक खुप छान झाले आहेत ❤️',
    translation: {
      en: '(The modaks turned out really well!)',
      hi: '(मोदक बहुत अच्छे बने हैं!)'
    },
    author: { en: 'A festival-order customer', hi: 'एक त्योहारी ऑर्डर ग्राहक', mr: 'एक सणासुदीच्या ऑर्डरचा ग्राहक' }
  },
  {
    quote: 'Ghavanya cha peeth chanch hote 👌👍',
    translation: {
      en: '(The ghavane flour mix turned out really good!)',
      hi: '(घावन का आटा मिश्रण बहुत बढ़िया बना!)'
    },
    author: { en: 'On the ghavane flour mix', hi: 'घावन आटे पर', mr: 'घावणे पिठाबद्दल' }
  },
  {
    quote: 'Kuldachi peethi ek number 👌👍',
    translation: {
      en: '(Your family flour mix is top-notch!)',
      hi: '(आपका पारिवारिक आटा मिश्रण बेहतरीन है!)'
    },
    author: { en: 'On the flour mixes', hi: 'आटा मिश्रण पर', mr: 'पिठाच्या मिश्रणाबद्दल' }
  },
  {
    text: {
      en: 'Everything tastes homemade in the best way — you can tell nothing is store-bought.',
      hi: 'सब कुछ बिल्कुल घर के बने जैसा लगता है — साफ पता चलता है कि कुछ भी बाज़ार का नहीं है।',
      mr: 'सगळं अगदी घरगुती चवीचं वाटतं — काहीच बाजारातलं नाही हे स्पष्ट जाणवतं.'
    },
    author: { en: 'A happy customer', hi: 'एक खुश ग्राहक', mr: 'एक समाधानी ग्राहक' }
  }
];

// ============ Render: reviews ============
function renderReviews() {
  const wrap = document.getElementById('reviewsGrid');

  wrap.innerHTML = REVIEWS.map(r => {
    const translation = r.translation ? r.translation[currentLang] : null;
    const mainText = r.quote || (r.text ? r.text[currentLang] : '');
    const author = r.author[currentLang] || r.author.en;
    return `
      <div class="review-card${r.featured ? ' featured' : ''}">
        <div class="review-quote-mark">"</div>
        <p class="review-text">${escapeHtml(mainText)}</p>
        ${translation ? `<p class="review-translation">${escapeHtml(translation)}</p>` : ''}
        <p class="review-author">— ${escapeHtml(author)}</p>
      </div>
    `;
  }).join('');
}

// ============ Language switching ============
function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';
  currentLang = lang;
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  applyStaticTranslations();
  setDefaultWhatsappLinks();
  setInstagramLinks();
  renderMenuTabs();
  renderMenuGrid();
  renderReviews();
}

function setupLangSwitchers() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

// ============ Mobile nav ============
function setupMobileNav() {
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('mobileNav');
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

// ============ Enquiry form -> WhatsApp ============
function setupEnquiryForm() {
  document.getElementById('enquiryForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('eName').value.trim();
    const phone = document.getElementById('ePhone').value.trim();
    const items = document.getElementById('eItems').value.trim();
    const date = document.getElementById('eDate').value;
    const message = document.getElementById('eMessage').value.trim();

    if (!name || !phone) {
      showToast(t('toast_fill_required'));
      return;
    }

    const msg = buildEnquiryMessage(name, phone, items, date, message);
    window.open(waLink(msg), '_blank', 'noopener');
    showToast(t('toast_enquiry_opening'));
  });
}

function buildEnquiryMessage(name, phone, items, date, message) {
  const labels = {
    en: { greet: `Hi ${BUSINESS_NAME}, I'd like to place an order.`, name: 'Name', phone: 'Phone', items: 'Item(s)', date: 'Preferred delivery date', note: 'Note' },
    hi: { greet: `नमस्ते ${BUSINESS_NAME}, मुझे ऑर्डर करना है।`, name: 'नाम', phone: 'फ़ोन', items: 'आइटम', date: 'पसंदीदा डिलीवरी तारीख', note: 'नोट' },
    mr: { greet: `नमस्कार ${BUSINESS_NAME}, मला ऑर्डर करायची आहे.`, name: 'नाव', phone: 'फोन', items: 'पदार्थ', date: 'हवी असलेली डिलिव्हरी तारीख', note: 'टीप' }
  };
  const L = labels[currentLang] || labels.en;
  return [
    L.greet, ``,
    `${L.name}: ${name}`,
    `${L.phone}: ${phone}`,
    items ? `${L.items}: ${items}` : null,
    date ? `${L.date}: ${date}` : null,
    message ? `${L.note}: ${message}` : null
  ].filter(Boolean).join('\n');
}

// ============ Toast ============
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

// ============ Utility ============
function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ============ Footer phone display ============
function renderFooterPhone() {
  document.getElementById('footerPhone').textContent = '+91 97696 20994';
}

// ============ Init ============
function detectInitialLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  } catch (e) { /* ignore */ }
  return 'mr';
}

currentLang = detectInitialLang();
setupLangSwitchers();
setupMobileNav();
setupEnquiryForm();
renderFooterPhone();
setLanguage(currentLang);
