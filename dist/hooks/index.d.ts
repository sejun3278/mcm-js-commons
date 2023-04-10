export default function CommonsHooksComponents(): {
    getAllComponentsClassName: (defaultClass: string, className?: string) => string;
    getOriginTemplate: (str: string) => string;
    getPXForm: (data: number | string, minimun?: string) => string;
    getRouter: () => () => any;
    getModuleNamewithJadenCase: () => string;
};
