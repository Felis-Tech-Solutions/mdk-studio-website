// Interface for the attributes in the contact information
interface ContactAttributes {
    phoneNumber: string;
    infoMail: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

// Interface for the main data structure of Contact Information
interface ContactInformationData {
    id: number;
    attributes: ContactAttributes;
}

// Interface for the entire API response for Contact Information
export interface ContactInformationApiResponse {
    data: ContactInformationData;
    meta: {};
}
