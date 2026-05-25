export interface UniversityFormData {
  name: string;
  slug: string;
  city: string;
  region: string;
  isAccepting: string;
  foundedYear: string;
  type: string;
  tuition: string;
  rankQS: string;
  rankTHE: string;
  acceptanceRate: string;
  employmentRate: string;
  degreeTypes: string;
  duration: string;
  language: string;
  popularMajors: string;
  totalStudents: string;
  totalTeachers: string;
  grantPercentage: string;
  needBasedGrant: string;
  meritBasedGrant: string;
  minIELTS: string;
  minTOEFL: string;
  minSAT: string;
  minGPA: string;
  annualApps: string;
  annualEnroll: string;
  appFee: string;
  platform: string;
  locationType: string;
  dormitory: string;
  livingCost: string;
  intlStudents: string;
  deadline1: string;
  deadline2: string;
  deadline3: string;
  resultDate: string;
  avgSalary: string;
  website: string;
  image: string;
}

export interface UniversityDetails {
  id: string;
  name: string;
  slug: string;
  city: string;
  region: string;
  isAccepting: string;
  foundedYear: string;
  type: string;
  tuition: string;
  rankQS: string;
  rankTHE: string;
  acceptanceRate: string;
  employmentRate: string;
  degreeTypes: string;
  duration: string;
  language: string;
  popularMajors: string;
  totalStudents: string;
  totalTeachers: string;
  grantPercentage: string;
  needBasedGrant: string;
  meritBasedGrant: string;
  minIELTS: string;
  minTOEFL: string;
  minSAT: string;
  minGPA: string;
  annualApps: string;
  annualEnroll: string;
  appFee: string;
  platform: string;
  locationType: string;
  dormitory: string;
  livingCost: string;
  intlStudents: string;
  deadline1: string;
  deadline2: string;
  deadline3?: string;
  resultDate: string;
  avgSalary: string;
  website: string;
  image: string;
}

export interface University {
  id: string;
  name: string;
  city: string;
  region: string; // 🌟 SHU QATOR QO'SHILDI
  tuition: string;
  image: string;
}





















