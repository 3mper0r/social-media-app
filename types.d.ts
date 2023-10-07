type Post = {
    postId: number;
    title: string;
    imageUrl: string;    
}

type User = {
    name: string;
    lastname: string;
    email: string;
    country: string;         
}

type Users = {
    users: User[]
}