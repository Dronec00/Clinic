export type ItemType = {
    value: string;
    href: string;
};

export type ContextType = {
    formState: boolean;
    formActive: () => void;
    formClose: () => void;
    items: ItemType[];
};