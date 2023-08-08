<script>
export default {
    name: "home",
    data() {
        return {
            user: this.$store.state.auth.user,
        };
    },
};
</script>

<template>
    <div class="row">
        <div class="col-12">
            <div class="card shadow-sm">
                <div class="card-header">
                    <h3>Dashboard</h3>
                </div>
                <div class="card-body">
                    <p class="mb-0">
                        You are logged in as <b>{{ user.email }}</b>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
