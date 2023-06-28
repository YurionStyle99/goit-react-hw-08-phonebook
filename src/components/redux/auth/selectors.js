export const isLogged = state => state.auth.isLogged;
export const isRefreshing = state => state.auth.isRefreshing;
export const userName = state => state.auth.user.name;
export const error = state => state.auth.error;
export const isLoading = state=> state.auth.isLoading;