export interface ServiceItem {
  id: string;
  title: string;
  tag?: string;
  description: string;
  fullDescription?: string;
  iconName: 'stethoscope' | 'sparkles' | 'shield-check' | 'smile' | 'star' | 'message-square';
  benefits?: string[];
  duration?: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: 'heart-handshake' | 'shield' | 'smile' | 'message-circle';
}

export interface ReviewItem {
  id: string;
  author?: string;
  rating: number;
  text: string;
  source: string;
  date?: string;
  highlight?: string;
}

export interface AppointmentBooking {
  serviceId: string;
  name: string;
  phone: string;
  email?: string;
  date: string;
  timeSlot: string;
  notes?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Root Canal' | 'Cosmetic' | 'Appointments';
}

export interface ServiceAreaItem {
  name: string;
  distance: string;
  landmarks: string;
}
