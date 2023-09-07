//API 호출할 내용들 여기에 다 몰아 넣을 것이다

import axios from "axios";

const DOMAIN = "http://localhost:8080";

//앞으로 모든 request 요청마다 "http://localhost:8080"가 기본으로 요청이 된다
const request = axios.create({
    baseURL: `${DOMAIN}/api`,
});
export const api = {
    //메뉴 관련 API 정의

    findAll: () => request.get("/menus"),
    findOne: (id) => request.get(`/menus/${id}`),
    create: (name, description, file) => {
        //파일 전송을 할 경우 formData로 감싸서 보내야 한다
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("file", file);
        return request.post("/menus", formData,{
            headers:{
                "Content-Type" : "multipart/form-data"
            }
        })
    },

    update:(id, name, description) => request.patch(`/menus/${id}`,{
        name: name,
        description
    }),
    updateImage: (id, file) => {
        const formData = new FormData();
        formData.append("file", file);
        return request.post(`/menus/${id}/image`, formData,{
            headers:{
                "Content-Type" : "multipart/form-data"
            }
        });
    },
    delete :(id) => request.delete(`/menus/${id}`)

};
//주문 관련 API 정의
export const api2 = {

    //전체 주문 목록 조회
    findAll: () => request.get("/orders"),
    //주문 목록 상세조회
    findOne: (id) => request.get(`/orders/${id}`),
    //주문
    create: (quantity, request_detail, menus_id) => request.post("/orders",
    {
        quantity: quantity,
        request_detail: request_detail,
        menus_id : menus_id
    }),
    //주문 수정
    update:(id, quantity, request_detail, menus_id) => request.patch(`/orders/${id}`,{
        quantity: quantity,
        request_detail: request_detail,
        menus_id : menus_id
    }),
    //주문 삭제
    delete :(id) => request.delete(`/orders/${id}`)
};