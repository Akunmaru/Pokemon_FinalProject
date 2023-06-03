const token = '50944c7ecddcffadee'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://pokemon-flask-app.onrender.com/api/poketeam`,
        {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'x-access-token': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch (`https://pokemon-flask-app.onrender.com/api/poketeam`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create new data')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch (`https://pokemon-flask-app.onrender.com/api/poketeam/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error('Failed to update data')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch (`https://pokemon-flask-app.onrender.com/api/poketeam/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            },
        });
        
        if (!response.ok) {
            throw new Error('Failed to delete data')
        }

        return;
    },
}