import http from "k6/http";
import { sleep } from "k6";

export const options = {
    vus: 50,
    duration: "30s",
};

export default function () {
    http.get("http://host.docker.internal:8081");
    sleep(1);
}
