<template>
	<v-container
        pl-2 pr-2 pa-0
	>
		<v-flex>
			<v-row class="pr-3 pl-3 pa-0">
				<v-col cols="8" class="pa-0">
					<p class="subtitle-2-custom">
						Hi, &nbsp;<span class="red--text">08999123456 (Jadol Suradol)</span><br> 
						bergabung sejak &nbsp;<span class="subtitle-local red--text">1-Januari-2019</span><br>
						jumlah premi yang ikut serta &nbsp;<span class="subtitle-local red--text">3</span><br>
					</p>
				</v-col>
				<v-col pa-0 cols="4" class="pa-0">
					<v-btn x-small tile primary color="blue ligthen-1" dark>
						<v-icon small>mdi-plus-circle-outline</v-icon>
						<span class="font-weight-regular text-capitalize">Perpanjang Premi</span>
					</v-btn>
				</v-col>
			</v-row>
			<v-row class="pr-3 pl-3 pa-0">
				<v-col cols="3" class="pa-0">
					<div class="text-center">
						<v-badge
							overlap
							class="align-self-center"
							color="green"
						>
							<template v-slot:badge>
								<v-icon dark>mdi-shield-plus-outline</v-icon>
							</template>
							<v-icon color="blue lighten-1" large>mdi-car</v-icon>
						</v-badge>
						<p class="subtitle-3-custom mb-0">mobil</p>			
					</div>		
				</v-col>
				<v-col cols="3" class="pa-0">
					<div class="text-center">
						<v-badge
							overlap
							class="align-self-center"
							color="yellow darken-2"
						>
							<template v-slot:badge>
								<v-icon dark>mdi-shield-plus-outline</v-icon>
							</template>
							<v-icon color="blue lighten-1" large>mdi-moped</v-icon>
						</v-badge>
						<p class="subtitle-3-custom mb-0">motor</p>			
					</div>
				</v-col>
				<v-col cols="3" class="pa-0">
					<div class="text-center">
						<v-badge
							overlap
							class="align-self-center"
							color="success"
						>
							<template v-slot:badge>
								<v-icon dark>mdi-shield-plus-outline</v-icon>
							</template>
							<v-icon color="blue lighten-1" large>mdi-face</v-icon>
						</v-badge>
						<p class="subtitle-3-custom mb-0">pengendara</p>			
					</div>
				</v-col>
				<v-col cols="3" class="pa-0">
					<div class="text-center">
						<v-badge
							overlap
							class="align-self-center"
							color="red lighten-1"
						>
							<template v-slot:badge>
								!
							</template>
							<v-icon color="blue lighten-1" large>mdi-account-child</v-icon>
						</v-badge>
						<p class="subtitle-3-custom mb-0">penumpang</p>			
					</div>
				</v-col>
			</v-row>
			<!-- <v-divider></v-divider> -->
			<v-row class="ma-0 pa-0">
				<v-col cols="8" class="ma-0 pa-0"></v-col>
				<v-col cols="4" class="ma-0 pa-0 pt-1 pb-0"><p class="subtitle-2-custom text-right mb-0 blue--text">&gt;&gt; LIHAT DETAIL</p></v-col>
			</v-row>
		</v-flex>
	</v-container>
</template>
<script>
export default {
	name: 'user-info'
}
</script>
<style scoped>
.subtitle-local{
    font-size: 0.675rem !important;
    font-weight: 500;
    letter-spacing: 0.0071428571em !important;
    line-height: 0.25rem !important;
  }
.subtitle-2-custom{
    font-size: 0.675rem !important;
    font-weight: 500;
    letter-spacing: 0.0071428571em !important;
    line-height: 1rem !important;
  }
.subtitle-3-custom{
    font-size: 0.575rem !important;
    font-weight: 500;
    letter-spacing: 0.0071428571em !important;
    line-height: 1rem !important;
  }
</style>