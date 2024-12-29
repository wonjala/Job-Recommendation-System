// Define the TypeScript type for the user object
type User = {
    basicInformation: {
      name: string;
      professionalTitle: string;
      languages: string;
      age: number;
      currentSalary: number;
      expectedSalary: number;
      description: string;
    };
    contactInformation: {
      email: string;
      phone: string;
      country: string;
      city: string;
    };
  };
  
  // Create a dummy user object with sample data
  export const user: User = {
    basicInformation: {
      name: "Wonjala Joshi",
      professionalTitle: "UI/UX Designer ",
      languages: "English, French, Spanish",
      age: 22,
      currentSalary: 60000,
      expectedSalary: 80000,
      description: "Experienced designer with a passion for creating user experiences.",
    },
    contactInformation: {
      email: "won.zoo@example.com",
      phone: "+1234567890",
      country: "United States",
      city: "San Francisco",
    },
  };
  