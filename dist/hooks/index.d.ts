export default function CommonsHooksComponents(): {
    getAllComponentsClassName: (defaultClass: string, className?: string) => string;
    getOriginTemplate: (str: string) => string;
};