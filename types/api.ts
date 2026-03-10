// =========================================
// API RESPONSE TYPES
// =========================================

export type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string; details?: string };

// for  endpoints with pagination
export type PaginatedResponses<T> = {
  success: true;
  data: T[];
  meta: {
    total: number;
    page: number;
    perPage: number;
    hasMore: boolean;
  };
};

// in the case of api failure
export type ApiError = {
  success: false;
  error: string;
  details?: string;
};
