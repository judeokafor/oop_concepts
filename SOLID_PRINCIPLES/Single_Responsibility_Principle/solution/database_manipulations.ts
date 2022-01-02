class Task {

    constructor(private title: string, private deadline: Date) {
    }

    getTitle() {
        return this.title + "(" + this.deadline + ")";
    }


}


class TaskRepository {
    private db: Database;

    constructor() {
        this.db = Database.connect("admin:password@fakedb", ["tasks"]);
    }

    save(task: Task) {
        this.db.tasks.save(JSON.stringify(task));
    }
}