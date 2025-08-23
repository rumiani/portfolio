
export async function checkUrlAvailability(url: string): Promise<boolean> {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        const res = await fetch(url, { method: "HEAD", redirect: "follow", signal: controller.signal });
        clearTimeout(timeoutId);
        return res.ok;
    } catch {
        return false;
    }
}