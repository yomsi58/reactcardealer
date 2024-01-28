let token = '8f4f14810318bd039f8bdf2b946ce9659d52505ff6b950f1';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://fern-sprout-milk.glitch.me/api/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://fern-sprout-milk.glitch.me/api/cars`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
		},
    
        update: async (id:string, data:any = {}) => {
            const response = await fetch(`https://fern-sprout-milk.glitch.me/api/cars/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
        },
    
        delete: async(id:string) => {
            const response = await fetch(`https://fern-sprout-milk.glitch.me/api/cars/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                }
            })
        }
    }