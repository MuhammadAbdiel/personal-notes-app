const appPage = {
  id: {
    title: "Aplikasi Catatan",
    nav: {
      home: "Beranda",
      archives: "Arsip",
    },
    msg: {
      confirm: "Apakah anda yakin?",
      loading: "Memuat data...",
      error: "Ada kesalahan teknis. Coba lagi nanti!",
    },
    add: "Tambah",
    cancel: "Batal",
    delete: "Hapus",
    archive: "Arsipkan",
    active: "Aktifkan",
    back: "Kembali",
    pageNotFound: "Halaman Tidak Ditemukan",
  },
  en: {
    title: "Notes App",
    nav: {
      home: "Home",
      archives: "Archives",
    },
    msg: {
      confirm: "Are you sure?",
      loading: "Loading...",
      error: "Error. Try again later!",
    },
    add: "Add",
    cancel: "Cancel",
    delete: "Delete",
    archive: "Archive",
    active: "Active",
    back: "Back",
    pageNotFound: "Page Not Found",
  },
};

const loginPage = {
  id: {
    header: "Silahkan login untuk menggunakan aplikasi!",
    footer: "Belum punya akun?",
    footerRegisterLink: "Daftar disini",
  },
  en: {
    header: "Please login to use app!",
    footer: "Don't have an account?",
    footerRegisterLink: "Register here",
  },
};

const registerPage = {
  id: {
    header: "Isi form untuk mendaftar akun!",
    footer: "Sudah punya akun?",
    footerLoginLink: "Login disini",
    msg: {
      registerSuccess: "Akun berhasil dibuat",
    },
  },
  en: {
    header: "Fill the form to register account!",
    footer: "Already have an account?",
    footerLoginLink: "Login here",
    msg: {
      registerSuccess: "User created successfully",
    },
  },
};

const notePage = {
  id: {
    header: "Catatan Aktif",
    searchPlaceholder: "Cari berdasarkan judul ...",
    empty: "Tidak ada catatan",
  },
  en: {
    header: "Active Notes",
    searchPlaceholder: "Search by title ...",
    empty: "Empty note",
  },
};

const newNotePage = {
  id: {
    titlePlaceholder: "Judul",
    bodyPlaceholder: "Ketik disini ...",
    msgSuccess: "Berhasil menambahkan catatan!",
  },
  en: {
    titlePlaceholder: "Title",
    bodyPlaceholder: "Type here ...",
    msgSuccess: "Successfully add notes!",
  },
};

const noteIdPage = {
  id: {
    notFound: "Catatan tidak ditemukan",
  },
  en: {
    notFound: "Not Found",
  },
};

const archivePage = {
  id: {
    header: "Catatan Arsip",
  },
  en: {
    header: "Archived Notes",
  },
};

const content = {
  appPage,
  loginPage,
  registerPage,
  notePage,
  newNotePage,
  noteIdPage,
  archivePage,
};

export default content;
