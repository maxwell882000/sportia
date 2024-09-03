export interface UpdateReviewRequest {
  mark: number; // Required and within range 1-5
  eventId: string; // Required UUID string
  comment?: string;
}
