// Interface for the basic Information Block within attributes
interface InformationBlock {
    id: number;
    title: string;
    subtitle: string;
}

// Interface for Roadmap Steps with updated icon names
interface RoadmapStep {
    id: number;
    title: string;
    description: string;
    icon: string; // Icons are now more specific, e.g., "MeetingWithLaptopIcon"
}

// Interface for the Roadmap section
interface Roadmap {
    id: number;
    title: string;
    roadmapSteps: RoadmapStep[];
}

// Interface for Image Formats (e.g., thumbnail, small, medium, large)
interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: null | string;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
}

// Interface for Image Attributes including formats
interface ImageAttributes {
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    formats: Record<string, ImageFormat>;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null | any; // Can be more specific based on actual metadata structure
    createdAt: string;
    updatedAt: string;
}

// Interface for the Image Data Wrapper
interface ImageData {
    data: {
        id: number;
        attributes: ImageAttributes;
    };
}

// Interface for the Roof Construction Component including Image Data
interface RoofConstructionComponent {
    id: number;
    title: string;
    image: ImageData;
}

// Interface for the About Us section including Image Data
interface AboutUs {
    id: number;
    title: string;
    description: string;
    image: ImageData;
}

// Interface for the attributes in the HomePage data structure
interface HomePageAttributes {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Roadmap: Roadmap;
    roofConstructionComponent: {
        id: number;
        title: string;
        roofConstructionComponent: RoofConstructionComponent[];
    };
    aboutUs: AboutUs;
}

// Interface for the main data structure of HomePage
interface HomePageData {
    id: number;
    attributes: HomePageAttributes;
}

// Interface for the entire API response for HomePage
export interface HomePageApiResponse {
    data: HomePageData;
    meta: {};
}
