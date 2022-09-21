import { AxiosResponse } from "axios";
import { Text } from "../types/text";
import axiosInstance from "./axiosInstance";

interface TextService {
  deleteText: Promise<AxiosResponse<Text>>;
  updateText: Promise<AxiosResponse<Text>>;
  createText: Promise<AxiosResponse<Text>>;
  getText: Promise<AxiosResponse<Text>>;
}

export const getTextRequest = (): TextService["getText"] => {
  return axiosInstance.get("/text");
};

export const createTextRequest = (text: Text): TextService["createText"] => {
  return axiosInstance.post("/text", text);
};

export const updateTextRequest = (
  text: Text,
  textId: number
): TextService["updateText"] => {
  return axiosInstance.put(`/text/${textId}`, text);
};

export const deleteTextRequest = (
  textId: number
): TextService["deleteText"] => {
  return axiosInstance.delete(`/text/${textId}`);
};
