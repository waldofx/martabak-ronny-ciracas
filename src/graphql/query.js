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

const GetOrdersByNewest = gql`
    query MyQuery {
        orders(order_by: { created_at: desc }) {
            id
            created_at
            menu_items
            total_price
            status
        }
    }
`;

export { GetMenusByPrice, GetPostsByNewest, GetOrdersByNewest };
