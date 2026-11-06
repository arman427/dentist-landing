export type Stat = {
   value: string;
   suffix: string;
   label: string;
};

export const stats: Stat[] = [
   { value: "98", suffix: "%", label: "пациентов рекомендуют нас" },
   { value: "12\u00a0000", suffix: "+", label: "восстановленных улыбок" },
   { value: "4.9", suffix: "★", label: "средняя оценка на картах" },
   { value: "15", suffix: "лет", label: "работаем в вашем городе" },
];
