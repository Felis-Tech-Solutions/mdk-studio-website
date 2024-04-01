// Interface for the attributes of the Footer Component
interface FooterAttributes {
    mail: string;
    city: string;
    streetNameAndHouseNumber: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

// Interface for the main data structure of Footer Information
interface FooterData {
    id: number;
    attributes: FooterAttributes;
}

// Interface for the entire API response for Footer Information
export interface FooterComponentApiResponse {
    data: FooterData;
    meta: {};
}
