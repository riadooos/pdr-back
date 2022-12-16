import mongoose from "mongoose";
import { pdrSchema } from "../models/pdrModel";

const Pdr = mongoose.model("Pdr", pdrSchema);

export const getAllPdrs = async (req, res) => {
  try {
    const pdrs = await Pdr.find({}).sort({ createdAt: -1 });
    if (!pdrs)
      return res
        .status(400)
        .json({ message: "spare parts d'ont exist", success: false });
    else return res.status(200).json({ success: true, pdrs });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export const addNewPdr = async(req, res) => {
    try {
        const {code, designation, reference, machine ,status_comptable ,image, images} = req.body
        const newPdr = new Pdr({code, designation, reference, machine ,status_comptable ,image, images})
        const myNewPdr = await newPdr.save()
        if(myNewPdr) return res.status(200).json({success: true, message: `pdr was registrited`})
        else return res.status(400).json({success: false, message:"pdr don't registrited"})
    } catch (error) {
        return res.status(500).json({ success: false, error });
    }
}
