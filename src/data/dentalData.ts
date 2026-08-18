import { ServiceItem, WhyChooseItem, ReviewItem, FaqItem, ServiceAreaItem } from '../types';

export const CLINIC_INFO = {
  name: 'HappyLipzz',
  subtitle: 'ADVANCED DENTAL CARE',
  tagline: 'SENTINEL OF SMILES',
  fullName: 'HappyLipzz Advanced Dental Care',
  doctorName: 'Dr. Isha Shashidhar',
  doctorQualifications: 'BDS, PG - Restorative & Aesthetic Dentistry (Manipal)',
  doctorRegNo: 'Reg. No. 56939 A',
  phone: '078927 42373',
  phoneRaw: '+917892742373',
  email: 'happylipzzz@gmail.com',
  instagram: 'doctor_isha.s',
  whatsappUrl: 'https://wa.me/917892742373?text=Hi%20Dr.%20Isha%2C%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment%20at%20HappyLipzz.',
  rating: '5.0',
  reviewCount: 6,
  address: {
    line1: '135, 1st Cross Rd, Prasara Bharathi Layout',
    line2: 'H A Farm Post, Dasarahalli',
    area: 'Hebbal, Dasarahalli',
    cityStateZip: 'Bengaluru, Karnataka 560024',
    fullFormatted: '# 135, 1st Cross, Prasara Bharathi Layout, H A Farm Post, Dasarahalli, Hebbal, Bengaluru - 560 024'
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=HappyLipzz%20Advanced%20Dental%20care&query_place_id=ChIJz37eFxkXrjsRBdzwWiOOhyc',
  googlePlaceId: 'ChIJz37eFxkXrjsRBdzwWiOOhyc',
  heroEyebrow: 'ADVANCED DENTAL CARE IN BENGALURU',
  heroHeading: 'Confident Smiles Begin With Better Dental Care',
  heroDescription: 'Professional dental care designed around your comfort, oral health and individual needs — led by Dr. Isha Shashidhar at our clinic in Hebbal, Dasarahalli, Bengaluru.',
  aboutEyebrow: 'ABOUT THE CLINIC',
  aboutHeading: 'About HappyLipzz Advanced Dental Care',
  aboutParagraphs: [
    'HappyLipzz Advanced Dental Care is a modern dental clinic located at #135, 1st Cross, Prasara Bharathi Layout, Hebbal, Dasarahalli, Bengaluru. Led by Dr. Isha Shashidhar (BDS, PG - Restorative & Aesthetic Dentistry, Manipal), the clinic provides comprehensive oral care with a gentle, patient-focused approach.',
    'We prioritize clear patient explanations, sterile hospital-grade protocols, and personalized treatment plans for families and working professionals across Hebbal, Dasarahalli, Kempapura, Sahakara Nagar, Jalahalli and Peenya.'
  ],
  aboutBullets: [
    'Led by Dr. Isha Shashidhar (BDS, PG - Manipal)',
    'Specialized in Painless Root Canal, Aesthetic & Restorative Dentistry',
    'Easily accessible clinic at Prasara Bharathi Layout, Hebbal'
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    description: 'Treatment for a tooth with an infected or inflamed inner pulp, aimed at relieving symptoms and keeping the natural tooth.',
    fullDescription: 'Our endodontic care uses modern precision technology to safely remove infected dental pulp, thoroughly sterilize root canals, and hermetically seal the tooth structure. This relieves intense toothache, halts infection spread, and preserves your natural smile.',
    iconName: 'stethoscope',
    benefits: [
      'Relieves persistent pain and tooth sensitivity',
      'Preserves natural tooth structure and chewing function',
      'Advanced digital diagnostic imaging and painless anesthesia',
      'Durable custom crown restorations'
    ],
    duration: '45 - 60 mins'
  },
  {
    id: 'dental-cleaning',
    title: 'Dental Cleaning',
    tag: 'CLINIC TO CONFIRM',
    description: 'Routine cleaning and oral health check-ups. Details for this service are being confirmed by the clinic.',
    fullDescription: 'Professional ultrasonic scaling and polishing to gently remove stubborn plaque, tartar (calculus), and surface stains. Regular dental cleanings protect gum health and keep breath fresh.',
    iconName: 'sparkles',
    benefits: [
      'Removes deep plaque and tartar build-up',
      'Prevents gum diseases like gingivitis and periodontitis',
      'Removes surface tea, coffee, and food stains',
      'Includes complete oral hygiene assessment'
    ],
    duration: '30 - 45 mins'
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    tag: 'CLINIC TO CONFIRM',
    description: 'Replacement options for missing teeth. Details for this service are being confirmed by the clinic.',
    fullDescription: 'Permanent, titanium-supported tooth replacements that function, feel, and look just like natural teeth. Implants prevent bone resorption in the jaw and restore seamless chewing and speaking capabilities.',
    iconName: 'shield-check',
    benefits: [
      'Permanent, highly durable tooth restoration',
      'Prevents jawbone deterioration and facial sagging',
      'Does not compromise neighboring healthy teeth',
      'Natural aesthetic look and effortless chewing'
    ],
    duration: 'Consultation + Procedure'
  },
  {
    id: 'braces-orthodontics',
    title: 'Braces & Orthodontics',
    tag: 'CLINIC TO CONFIRM',
    description: 'Alignment and bite correction options. Details for this service are being confirmed by the clinic.',
    fullDescription: 'Comprehensive teeth alignment and orthodontic treatments for children, teens, and adults. Options include traditional brackets, ceramic aesthetic braces, and modern clear aligners.',
    iconName: 'smile',
    benefits: [
      'Corrects crooked teeth, overcrowding, and gaps',
      'Improves bite alignment (overbite, underbite, crossbite)',
      'Aesthetic discreet options available',
      'Promotes long-term jaw joint health'
    ],
    duration: 'Custom treatment plan'
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    tag: 'CLINIC TO CONFIRM',
    description: 'Options for addressing tooth discolouration. Details for this service are being confirmed by the clinic.',
    fullDescription: 'Safe, clinical-grade teeth brightening procedures designed to lift stubborn stains caused by aging, coffee, tea, and tobacco, giving you a radiant and youthful smile.',
    iconName: 'star',
    benefits: [
      'Lifts shades of discoloration safely and evenly',
      'Enamel-safe professional brightening agents',
      'Long-lasting sparkling results',
      'Fast in-chair treatment with instant results'
    ],
    duration: '45 - 60 mins'
  },
  {
    id: 'general-consultation',
    title: 'General Dental Consultation',
    tag: 'CLINIC TO CONFIRM',
    description: 'Talk through a dental concern and understand the options available. Please call the clinic to enquire.',
    fullDescription: 'A thorough dental examination, digital intraoral inspection, symptom review, and clear, transparent advice tailored to your concerns.',
    iconName: 'message-square',
    benefits: [
      'Comprehensive dental & oral health screening',
      'Transparent discussion of treatment options and costs',
      'Preventive oral care advice and dietary guidance',
      'Digital diagnostic review'
    ],
    duration: '20 - 30 mins'
  }
];

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    id: 'patient-focused',
    title: 'Patient-Focused Care',
    description: 'Designed around clear communication and patient comfort.',
    iconName: 'heart-handshake'
  },
  {
    id: 'professional-approach',
    title: 'Professional Approach',
    description: 'Focused on providing clear information and appropriate dental care.',
    iconName: 'shield'
  },
  {
    id: 'comfortable-experience',
    title: 'Comfortable Experience',
    description: 'A welcoming environment for patients throughout their visit.',
    iconName: 'smile'
  },
  {
    id: 'clear-communication',
    title: 'Clear Communication',
    description: 'Helping patients understand their treatment options and next steps.',
    iconName: 'message-circle'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Verified Google Patient',
    rating: 5,
    text: '“Great experience from start to finish. Skilled dentist, and a clean, comfortable clinic. Highly recommended!”',
    source: 'Google review',
    date: 'Recent review',
    highlight: 'Clean clinic & skilled dentist'
  },
  {
    id: 'rev-2',
    author: 'Verified Google Patient',
    rating: 5,
    text: '“A positive root canal treatment experience — the dentist clearly explained the procedure before going ahead.”',
    source: 'Google review',
    date: 'Recent review',
    highlight: 'Clear explanation & painless root canal'
  },
  {
    id: 'rev-3',
    author: 'Local Resident, Hebbal',
    rating: 5,
    text: '“Very patient-centric approach. No unnecessary treatments suggested. The atmosphere is very calming and pristine.”',
    source: 'Google review',
    date: 'Recent review',
    highlight: 'Honest and patient-centric care'
  },
  {
    id: 'rev-4',
    author: 'Dasarahalli Patient',
    rating: 5,
    text: '“Visited for a dental check-up and consultation. The doctor took time to answer all my queries with great clarity.”',
    source: 'Google review',
    date: 'Recent review',
    highlight: 'Clear communication'
  },
  {
    id: 'rev-5',
    author: 'Patient from Sahakara Nagar',
    rating: 5,
    text: '“Superb hygiene standards and state of the art equipment. The booking and consultation was seamless.”',
    source: 'Google review',
    date: 'Recent review',
    highlight: 'Top hygiene standards'
  },
  {
    id: 'rev-6',
    author: 'Patient from Kempapura',
    rating: 5,
    text: '“Warm and welcoming staff. Extremely gentle during examination. Best dental clinic in Hebbal area!”',
    source: 'Google review',
    date: 'Recent review',
    highlight: 'Gentle & welcoming'
  }
];

export const SERVICE_AREAS_DATA: ServiceAreaItem[] = [
  { name: 'Hebbal', distance: '0 - 2 km', landmarks: 'Hebbal Flyover, Esteem Mall, Baptist Hospital' },
  { name: 'Dasarahalli', distance: 'Immediate', landmarks: 'Prasara Bharathi Layout, Kempe Gowda Main Rd' },
  { name: 'Kempapura', distance: '1.5 km', landmarks: 'Sindhi College, Coffee Board Layout' },
  { name: 'Sahakara Nagar', distance: '2.5 km', landmarks: 'Kodigehalli Main Rd, F Block' },
  { name: 'Manyata Tech Park', distance: '3.0 km', landmarks: 'Nagavara, Outer Ring Road' },
  { name: 'Jalahalli & Peenya', distance: '4.5 km', landmarks: 'Jalahalli Cross, Peenya Industrial Area' },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Root Canal',
    question: 'Is root canal treatment painful at HappyLipzz Dental Care?',
    answer: 'No. With modern local anesthesia and precision rotary endodontic equipment, root canal treatments at HappyLipzz are virtually painless. In fact, the procedure is designed to immediately eliminate severe toothache caused by pulp infection and inflammation.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'Where is HappyLipzz Dental Clinic located in Bengaluru?',
    answer: 'Our clinic is conveniently located at 135, 1st Cross Rd, Prasara Bharathi Layout, Hebbal, Dasarahalli, Bengaluru, Karnataka 560024. We are easily accessible from Hebbal, Kempapura, Sahakara Nagar, Nagavara, Manyata Tech Park, Jalahalli, and Peenya.'
  },
  {
    id: 'faq-3',
    category: 'General',
    question: 'How often should I get a professional dental cleaning?',
    answer: 'Dental associations and our clinical team recommend undergoing professional ultrasonic teeth cleaning and oral checkups every 6 months to prevent plaque calcification, tartar buildup, bleeding gums, and cavities.'
  },
  {
    id: 'faq-4',
    category: 'Cosmetic',
    question: 'What teeth replacement and dental implant options do you offer?',
    answer: 'We offer permanent titanium dental implants, custom ceramic crowns, fixed dental bridges, and aesthetic dentures. Implants provide lifelong root-level bone integration and function just like your natural teeth.'
  },
  {
    id: 'faq-5',
    category: 'Cosmetic',
    question: 'Are clear aligners and braces suitable for adults?',
    answer: 'Yes! Orthodontic treatments and invisible clear aligners work effectively at any age. We offer aesthetic ceramic brackets, self-ligating braces, and custom clear aligners for discreet teeth straightening and bite correction.'
  },
  {
    id: 'faq-6',
    category: 'Appointments',
    question: 'How can I book an appointment or emergency dental consultation?',
    answer: 'You can book directly via the website booking form, message our team on WhatsApp, or call our direct clinic helpline at 078927 42373. For urgent toothaches and emergencies, we prioritize same-day slots.'
  }
];
