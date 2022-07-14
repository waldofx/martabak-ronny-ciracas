import { gql } from "@apollo/client";

const GetMenusByPrice = gql`
    query MyQuery {
        menus(order_by: { price: asc }) {
            id
            img
            name
            price
        }
    }
`;

const GetPostsByNewest = gql`
    query MyQuery {
        posts(order_by: { created_at: desc }) {
            id
            created_at
            title
            content
        }
    }
`;

export { GetMenusByPrice, GetPostsByNewest };
