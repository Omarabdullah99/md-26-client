import { create } from "zustand";
import axios from "axios";

const EventStore = create((set) => ({
  CategoryList: null,
  CategoryListRequest: async () => {
    let res = await axios.get(`/api/v1/category/category-list`);
    if (res.data["status"] === "success") {
      set({ CategoryList: res.data["data"] });
    }
  },

  EventList: null,
  EventListRequest: async () => {
    let res = await axios.get(`/api/v1/event/EventList`);
    if (res.data["status"] === "success") {
      set({ EventList: res.data["data"] });
    }
  },
  ListByCategoryRequest: async (CategoryID) => {
    set({ EventList: null });
    let res = await axios.get(
      `/api/v1/event/EventListByCategory/${CategoryID}`
    );
    if (res.data["status"] === "success") {
      set({ EventList: res.data["data"] });
    }
  },

  ListByKeywordRequest: async (Keyword) => {
    set({ EventList: null });
    let res = await axios.get(`/api/v1/event/ListByKeyword/${Keyword}`);
    if (res.data["status"] === "success") {
      set({ EventList: res.data["data"] });
    }
  },

  SearchKeyword: "",
  SetSearchKeyword: async (keyword) => {
    set({ SearchKeyword: keyword });
  },

  Details: null,
  DetailsRequest: async (id) => {
    let res = await axios.get(`/api/v1/event/DetailsEvent/${id}`);
    if (res.data["status"] === "success") {
      set({ Details: res.data["data"] });
    }
  },

  EventForm: {
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
    categoryID: "680a6811114f6553d9d2b217",
  },
  EventFormChange: (name, value) => {
    set((state) => ({
      EventForm: {
        ...state.EventForm,
        [name]: value,
      },
    }));
  },

  EventList: null,
  createEventRequest: async (PostBody) => {
    // console.log("event-postbody",PostBody)
    try {
      set({EventList:null})
      let res = await axios.post(`/api/v1/event/create-event`, PostBody);
      return res.data["status"] === "success";
    } catch (e) {
      console.error("Failed to create event list:", e);
    }
  },

  EventListByUserRequest: async () => {
    try {
      let res = await axios.get(`/api/v1/event/eventlist-user`);
      if (res.data["status"] === "success") {
        set({ EventList: res.data["data"] });
      } else {
        set({ EventList: [] });
      }
    } catch (e) {
      console.error("Failed to fetch event list:", e);
      
    }
  },

  DeleteEventRequest: async (id) => {
    try {
      let res = await axios.delete(`/api/v1/event/DeleteEvent/${id}`);
      if (res.data["status"] === "success") {
        // success হলে state থেকে remove করো
        set((state) => ({
          EventList: state.EventList.filter(event => event._id !== id),
        }));
      }
    } catch (e) {
      console.error("Delete failed:", e);
    }
  },




  SaveEventList: null,
  createSaveEventRequest: async (PostBody) => {
    // console.log("event-postbody",PostBody)
    try {
      set({SaveEventList:null})
      let res = await axios.post(`/api/v1/save/create-save`, PostBody);
      return res.data["status"] === "success";
    } catch (e) {
      console.error("Failed to create event list:", e);
    }
  },

  SaveEventListByUserRequest: async () => {
    try {
      let res = await axios.get(`/api/v1/save/save-list`);
      if (res.data["status"] === "success") {
        set({ SaveEventList: res.data["data"] });
      } else {
        set({ SaveEventList: [] });
      }
    } catch (e) {
      console.error("Failed to fetch event list:", e);
      
    }
  },
}));

export default EventStore;
