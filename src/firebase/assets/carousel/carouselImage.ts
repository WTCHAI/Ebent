import { getStorage , ref  } from "firebase/storage";
import { app } from "../../InitializeApp";


const storage = getStorage(app);

export const onGetCarouselImages = async () => {
    const storageRef = ref(storage, 'asset/carousel');
    console.log(storageRef)

}