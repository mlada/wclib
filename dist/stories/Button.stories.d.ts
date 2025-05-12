import "../index";
declare const _default: {
    title: string;
    component: string;
    argTypes: {
        primary: {
            control: string;
        };
        size: {
            control: {
                type: string;
            };
            options: string[];
        };
        label: {
            control: string;
        };
        backgroundColor: {
            control: string;
        };
        onClick: {
            action: string;
        };
    };
    render: (args: any) => import("lit").TemplateResult<1>;
};
export default _default;
export declare const Primary: {
    args: {
        primary: boolean;
        label: string;
        size: string;
    };
};
