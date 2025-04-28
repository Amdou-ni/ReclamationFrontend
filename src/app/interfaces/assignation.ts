export interface Assignation {

    id: string; // Identifiant unique
  taskId: string; // Identifiant de la tâche
  userId: string; // Identifiant de l'utilisateur
  groupId?: string; // Identifiant du groupe (optionnel)
  dateAssignation: Date; // Date d'assignation
}
