import { gql } from "@apollo/client";

const InsertMenus = gql`
    mutation MyMutation($object: menus_insert_input = {}) {
        insert_menus_one(object: $object) {
            id
            img
            name
            price
        }
    }
`;

const DeleteMenus = gql`
    mutation MyMutation($id: Int!) {
        delete_menus(where: { id: { _eq: $id } }) {
            affected_rows
            returning {
                id
                img
                name
                price
            }
        }
    }
`;

const UpdateMenus = gql`
    mutation MyMutation2($object: menus_set_input = {}, $id: Int!) {
        update_menus(_set: $object, where: { id: { _eq: $id } }) {
            returning {
                id
                img
                name
                price
            }
            affected_rows
        }
    }
`;

const InsertPosts = gql`
    mutation MyMutation($object: posts_insert_input = {}) {
        insert_posts_one(object: $object) {
            id
            created_at
            title
            content
        }
    }
`;

const DeletePosts = gql`
    mutation MyMutation($id: Int!) {
        delete_posts(where: { id: { _eq: $id } }) {
            affected_rows
            returning {
                id
                created_at
                title
                content
            }
        }
    }
`;

const UpdatePosts = gql`
    mutation MyMutation2($object: posts_set_input = {}, $id: Int!) {
        update_posts(_set: $object, where: { id: { _eq: $id } }) {
            returning {
                id
                created_at
                title
                content
            }
            affected_rows
        }
    }
`;

const InsertOrders = gql`
    mutation MyMutation($object: orders_insert_input = {}) {
        insert_orders_one(object: $object) {
            id
            menu_items
            total_price
            created_at
        }
    }
`;

export { InsertMenus, DeleteMenus, UpdateMenus, InsertPosts, DeletePosts, UpdatePosts, InsertOrders };
