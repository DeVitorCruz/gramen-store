import { FlexFormField } from "./flex-form-field";

export interface FlexFormConfig {
    title: string;
    subtitle?: string;
    submitLabel: string;
    fields: FlexFormField[];
};
