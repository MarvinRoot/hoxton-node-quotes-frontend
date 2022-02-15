export type Quote = {
    id: number
    authorId: number
    quote: string
};

export type Author = {
    id: number
    firstName: string
    lastName: string
    age: number | string
    image: string
}