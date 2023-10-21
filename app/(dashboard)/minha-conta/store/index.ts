import { AccountUser } from "@/types/response/myAccount";
import { create } from "zustand";

export interface AccountUserReducer {
  account: AccountUser | null;
  nameUser: string | null;
  firstNameUser: string | null;
  emailUser: string | null;
  cpfUser: string | null;
  phoneUser: string | null;
  profileImage: string | null;
  isOpenDialogProfileImageUser: boolean;
  isOpenDialogUpdateEmail: boolean;
  isOpenDialogUpdateCPF: boolean;
  isOpenDialogUpdatePhone: boolean;
  isOpenDialogUpdateName: boolean;
  isOpenDialogUpdatePassword: boolean;
  prefixNameUser: string | null;
  newProfileImage: string | null;
  setNameUser: (name: string | null) => void;
  setEmailUser: (email: string | null) => void;
  setCpfUser: (cpf: string | null) => void;
  setPhoneUser: (cpf: string | null) => void;
  setNewProfileImageUser: (photo: string | null) => void;
  setProfileImageUser: (photo: string | null) => void;
  setOpenDialogProfileImageUser: () => void;
  setOpenDialogUpdateEmail: () => void;
  setOpenDialogUpdatePassword: () => void;
  setOpenDialogUpdateCPF: () => void;
  setOpenDialogUpdatePhone: () => void;
  setOpenDialogUpdateName: () => void;
  setDataUser: (state: AccountUser | undefined) => void;
  loading: boolean;
  setLoading: () => void;
}

export const useAccountUserStore = create<AccountUserReducer>((set, get) => {
  return {
    account: null,
    isOpenDialogProfileImageUser: false,
    nameUser: null,
    firstNameUser: null,
    emailUser: null,
    cpfUser: null,
    phoneUser: null,
    profileImage: null,
    newProfileImage: null,
    isOpenDialogUpdateEmail: false,
    isOpenDialogUpdateCPF: false,
    isOpenDialogUpdatePhone: false,
    isOpenDialogUpdateName: false,
    isOpenDialogUpdatePassword: false,
    prefixNameUser: null,
    loading: false,
    setLoading: () => {
      set({ loading: !get().loading });
    },

    setNameUser: (name: string | null) => {
      set({ nameUser: name });
    },
    setEmailUser: (email: string | null) => {
      set({ emailUser: email });
    },
    setCpfUser: (cpf: string | null) => {
      set({ cpfUser: cpf });
    },
    setPhoneUser: (phone: string | null) => {
      set({ phoneUser: phone });
    },
    setNewProfileImageUser: (photo: string | null) => {
      set({ newProfileImage: photo });
    },
    setProfileImageUser: (photo: string | null) => {
      set({ profileImage: photo });
    },
    setOpenDialogProfileImageUser: () => {
      const { isOpenDialogProfileImageUser } = get();
      set({
        isOpenDialogProfileImageUser: !isOpenDialogProfileImageUser,
        newProfileImage: null,
      });
    },
    setDataUser: (state: AccountUser | undefined) => {
      const profileImageUser = state?.data.avatar_path;
      const prefixNameUser = state?.data.name?.slice(0, 2).toLocaleUpperCase();
      const firstNameUser = state?.data.name?.split(" ")[0];

      const nameUser = state?.data.name;
      const emailUser = state?.data.email;
      const cpfUser = state?.data.cpf;
      const phoneUser = state?.data.phone;

      set({
        account: state,
        nameUser: nameUser,
        firstNameUser: firstNameUser,
        emailUser: emailUser,
        cpfUser: cpfUser,
        phoneUser: phoneUser,
        profileImage: profileImageUser,
        prefixNameUser: prefixNameUser,
      });
    },
    setOpenDialogUpdateEmail: () => {
      const { isOpenDialogUpdateEmail } = get();
      set({ isOpenDialogUpdateEmail: !isOpenDialogUpdateEmail });
    },
    setOpenDialogUpdatePassword: () => {
      const { isOpenDialogUpdatePassword } = get();
      set({ isOpenDialogUpdatePassword: !isOpenDialogUpdatePassword });
    },
    setOpenDialogUpdateCPF: () => {
      const { isOpenDialogUpdateCPF } = get();
      set({ isOpenDialogUpdateCPF: !isOpenDialogUpdateCPF });
    },
    setOpenDialogUpdatePhone: () => {
      const { isOpenDialogUpdatePhone } = get();
      set({ isOpenDialogUpdatePhone: !isOpenDialogUpdatePhone });
    },
    setOpenDialogUpdateName: () => {
      const { isOpenDialogUpdateName } = get();
      set({ isOpenDialogUpdateName: !isOpenDialogUpdateName });
    },
  };
});
