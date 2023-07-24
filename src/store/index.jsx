
// Redux Toolkit'dan configureStore fonksiyonunu projeye dahil ediyoruz.
import { configureStore } from "@reduxjs/toolkit";
// Redux Toolkit Query'den setupListeners fonksiyonunu projeye dahil ediyoruz.
import { setupListeners } from "@reduxjs/toolkit/dist/query";
// "./apis/usersApi" yolu üzerinde bulunan usersApis modülünü projeye dahil ediyoruz.
import { usersApis } from "./apis/usersApi";
import { kategoriApi } from "./apis/kategoriApi";
import { adressApi } from "./apis/adressApi";
// Redux store'u yapılandırıyoruz ve export ediyoruz.
export const store = configureStore({
    // Reducerları belirliyoruz. Burada usersApis.reducerPath ile usersApis modülündeki reducer'ı ekliyoruz.
    reducer: {
        [usersApis.reducerPath]: usersApis.reducer,
        [kategoriApi.reducerPath]: kategoriApi.reducer,
        [adressApi.reducerPath]: adressApi.reducer,
    },
    // Middleware'leri yapılandırıyoruz.
    middleware: (getDefaultMiddleware) => {
        // Redux Toolkit'ın varsayılan middleware'lerini alıyoruz.
        const defaultMiddleware = getDefaultMiddleware();
        // Sonra usersApis modülündeki middleware'i bu listeye ekliyoruz.
        return defaultMiddleware.concat(usersApis.middleware).concat(kategoriApi.middleware).concat(adressApi.middleware);
    },
});

// Redux Toolkit Query'nin setupListeners fonksiyonunu kullanarak store'a listener'ları ekliyoruz.
setupListeners(store.dispatch);

export {
    useAddUsersMutation,
    useRemoveUsersMutation,
    useGetUsersQuery,
} from "./apis/usersApi";
export {
    useAddKategoriMutation,
    useGetKategoriQuery,
    useRemoveKategoriMutation,
} from "./apis/kategoriApi";
export {
    useAddAdressMutation,
    useGetAdressQuery,
    useRemoveAdressMutation,
} from "./apis/adressApi";
