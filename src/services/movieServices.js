import { useState } from "react";
import api from "./api";

export async function listData() {
    try {
        const response = await api.get();
        if (response.data && Array.isArray(response.data)) {
            console.log(response.data)
            return response.data;
        } else {
            console.log('Nenhum dado encontrado.');
        }
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
    }
}

