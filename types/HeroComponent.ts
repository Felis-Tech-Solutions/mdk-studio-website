// Interface for the basic InformationBlock within the attributes
interface InformationBlock {
    id: number;
    title: string;
    subtitle: string;
}

// More specific type for the image formats within the hero object
interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
}

// Interface for the attributes of the image within the hero object
interface ImageAttributes {
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    formats: {
        thumbnail: ImageFormat;
        small: ImageFormat;
        medium: ImageFormat;
        large: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
    related: Array<{
        __type: string;
        id: number;
        title: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    }>;
}

// Interface for the hero object containing image data
interface Hero {
    data: {
        id: number;
        attributes: ImageAttributes;
    };
}

// Interface for the attributes in the main data structure
interface PageAttributes {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    informationBlocks: InformationBlock[];
    hero: Hero;
}

// Interface for the main data structure
interface HeroComponentData {
    id: number;
    attributes: PageAttributes;
}

// Interface for the entire API response
export interface HeroComponentApiResponse {
    data: HeroComponentData;
    meta: {};
}
