export interface OffboardingForm {
  receiver: string;
  email: string;
  phone: number;
  street: string;
  city: string;
  postalCode: number;
  country: string;
  notes?: string;
}
