// Interface for Roadmap Steps
interface RoadmapStep {
    id: number;
    title: string;
    description: string;
    icon: string;
}

// Interface for the Roadmap section
interface Roadmap {
    id: number;
    title: string;
    roadmapSteps: RoadmapStep[];
}

// Interface for the Image Formats (thumbnails, medium, etc.)
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

// Interface for the Image Attributes
interface ImageAttributes {
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    formats: {
        thumbnail?: ImageFormat;
        small?: ImageFormat;
        medium?: ImageFormat;
        large?: ImageFormat;
    };
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

// Interface for Roof Construction Component Images
interface RoofConstructionComponentImage {
    data: {
        id: number;
        attributes: ImageAttributes;
    };
}

// Interface for Roof Construction Components
interface RoofConstructionComponent {
    id: number;
    title: string;
    image: RoofConstructionComponentImage;
}

// Interface for the attributes of the HomePage
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
}

// Interface for the main data structure of the HomePage
interface HomePageData {
    id: number;
    attributes: HomePageAttributes;
}

// Interface for the entire API response for the HomePage
export interface HomePageApiResponse {
    data: HomePageData;
    meta: {};
}
