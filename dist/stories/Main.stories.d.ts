declare const _default: {
    title: string;
    parameters: {
        layout: string;
        assets: string[];
    };
    argTypes: {
        theme: {
            control: string;
            options: string[];
            description: string;
        };
    };
    args: {
        theme: string;
    };
};
export default _default;
export declare const Default: (args: {
    theme: string;
}) => import("lit").TemplateResult<1>;
