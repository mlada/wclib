export declare class UiInputDirective {
    private el;
    set type(value: 'text' | 'password' | 'email' | 'number');
    set value(value: string);
    set placeholder(value: string);
    set disabled(value: boolean);
}
